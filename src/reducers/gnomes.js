import { createSelector } from 'reselect';
import {
  FETCH_GNOMES_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  gnomes: [],
};

export default function gnomes(state = initialState, action) {
  switch (action.type) {
    case FETCH_GNOMES_SUCCESS:
      return {
        ...state,
        gnomes: action.gnomes,
      };
    default:
      return state;
  }
}

export const getGnomesSelector = state => state.gnomes.gnomes;

export const extractProfessions = (currentGnomes) => {
  const professions = [];
  currentGnomes.gnomes.gnomes.forEach((gnome) => {
    gnome.professions.forEach((profession) => {
      if (professions.indexOf(profession) === -1) professions.push(profession);
    });
  });
  return professions;
};

export const getProfessions = createSelector(
  getGnomesSelector,
  extractProfessions,
);

export const getFilteredGnomes = (currentGnomes,
  {
    searchQuery, bodyParams, hairColor, profession,
  }) => {
  let filtered = currentGnomes;

  if (searchQuery) {
    filtered = filtered.filter((gnome) => {
      return gnome.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }
  if (bodyParams) {
    filtered.sort((gnomeA, gnomeB) => (gnomeA[bodyParams] - gnomeB[bodyParams]));
  }
  if (hairColor) {
    filtered = filtered.filter(gnome => gnome.hair_color === hairColor);
  }
  if (profession) {
    filtered = filtered.filter(gnome => gnome.professions.includes(profession));
  }
  return filtered;
};
