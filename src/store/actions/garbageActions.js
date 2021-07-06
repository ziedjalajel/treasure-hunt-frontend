import instance from "./instance";

import * as actionTypes from "./types";

export const fetchGarbage = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/garbages");

      dispatch({
        type: actionTypes.FETCH_GARBAGE,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
