export const getTowns = state => state.savedTowns;

export const getTown = (state, id) => {
  console.log(id);
  const town = state.savedTowns.find(item => (item._id === id));
  return town;
};
