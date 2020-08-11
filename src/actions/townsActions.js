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

export const DELETE_TOWN = 'DELETE_TOWN';
export const deleteTown = id => ({
  type: DELETE_TOWN,
  payload: id
});

export const UPDATE_TOWN = 'UPDATE_TOWN';
export const updateTown = (data, id) => ({
  type: UPDATE_TOWN,
  payload: {
    data,
    id
  }
});
