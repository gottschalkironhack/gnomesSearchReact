import axios from 'axios';
import { environment } from '../environments/environment';

const { gnomesApiUrl } = environment;

export const getGnomesData = () => {
  return new Promise((resolve, reject) => {
    axios.get(gnomesApiUrl)
      .then((response) => { resolve(response.data.Brastlewark); })
      .catch((error) => { reject(error); });
  });
};
