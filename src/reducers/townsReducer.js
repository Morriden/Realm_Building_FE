import { SET_TOWNS, CREATE_TOWN } from '../actions/townsActions';

export const initialState = {
  //saved towns and edited town
  createTown: {
    name: '',
    food: 1,
    law: 1,
    population: 1,
    production: 1,
    traffic: 1,
    location: ''
  },
  savedTowns: []
};

export default function reducer(state, action) {
  switch(action.type) {
    case SET_TOWNS:
      return { ...state, savedTowns: action.payload };
    case CREATE_TOWN:
      return { savedTowns: [
        ...state.savedTowns, action.payload
      ] };
    default:
      return state;
  }
}
