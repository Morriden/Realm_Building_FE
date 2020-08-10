import { SET_TOWNS } from '../actions/townsActions';

export const initialState = {
  towns: []
};

export default function reducer(state, action) {
  switch(action.type) {
    case SET_TOWNS:
      return { ...state, towns: action.payload };
    default:
      return state;
  }
}
