import * as actionTypes from "../actions/types";

const initialState = {
  users: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
