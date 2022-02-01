import endpoints from './endpoints';

const getAllBeers = async () => {
  const response = await fetch(endpoints.all_beers)
    .then((res) => res.json())
    .then((data) => data);
  return response;
};

const BeersAPI = {
  getAllBeers,
};

export default BeersAPI;
