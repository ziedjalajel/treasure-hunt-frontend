import * as actionTypes from "../actions/types";

const initialState = {
  garbages: [],
};
const garbageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GARBAGE:
      return {
        ...state,
        garbages: action.payload,
      };
    default:
      return state;
  }
};
export default garbageReducer;
