const isLocalStorageStale = () => {
  const cachingTimeLimit = 60 * 1000 * 5;
  let lastDataRefresh = null;
  try {
    const serializedLastDataRefresh = localStorage.getItem('stateLastDataRefresh');
    if (serializedLastDataRefresh === null) {
      return true;
    }
    lastDataRefresh = JSON.parse(serializedLastDataRefresh);
  } catch (error) {
    return true;
  }
  return (Date.now() - cachingTimeLimit) > lastDataRefresh;
};

export default isLocalStorageStale;
