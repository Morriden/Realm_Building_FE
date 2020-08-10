export const SET_TOWNS = 'SET_TOWNS';
export const setTowns = towns => ({
  type: SET_TOWNS,
  payload: towns
});

export const CREATE_TOWN = 'CREATE_TOWN';
export const createTown = town => ({
  type: CREATE_TOWN,
  payload: town
});
