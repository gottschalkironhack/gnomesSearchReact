const setLocalStorage = (gnomes) => {
  try {
    const gnomesSerialized = JSON.stringify(gnomes);
    const serializedLastDataRefresh = JSON.stringify(Date.now());
    localStorage.setItem('stateGnomes', gnomesSerialized);
    localStorage.setItem('stateLastDataRefresh', serializedLastDataRefresh);
  } catch (error) {
    // catch error
  }
};
export default setLocalStorage;
