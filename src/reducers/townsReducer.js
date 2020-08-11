import { SET_TOWNS, CREATE_TOWN, DELETE_TOWN, UPDATE_TOWN } from '../actions/townsActions';

export const initialState = {
  savedTowns: []
};

export default function reducer(state, action) {
  switch(action.type) {
    case SET_TOWNS:
      return { ...state, savedTowns: action.payload };
    case CREATE_TOWN:
      return { 
        savedTowns: [
          ...state.savedTowns, action.payload
        ] 
      };
    case DELETE_TOWN:
      return {
        savedTowns: 
        state.savedTowns.filter(town => town._id !== action.payload)
      };
    case UPDATE_TOWN:
      return {
        savedTowns: 
        [...state.savedTowns.filter(town => town._id !== action.payload.id), action.payload.data]
      };
    default:
      return state;
  }
}
