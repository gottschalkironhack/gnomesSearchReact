const getlocalStorage = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      try {
        const gnomesSerialized = localStorage.getItem('stateGnomes');
        if (gnomesSerialized === null) {
          reject();
        }
        resolve(JSON.parse(gnomesSerialized));
      } catch (error) {
        reject(error);
      }
    }, 0);
  });
};

export default getlocalStorage;
