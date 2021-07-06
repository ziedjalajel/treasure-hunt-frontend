import * as actionTypes from "../actions/types";

const initialState = {
  treasures: [],
};
const treasureReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TREASURE:
      return {
        ...state,
        treasures: action.payload,
      };
    default:
      return state;
  }
};
export default treasureReducer;
