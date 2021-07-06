import instance from "./instance";

import * as actionTypes from "./types";

export const fetchTreasures = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/treasures");

      dispatch({
        type: actionTypes.FETCH_TREASURE,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
