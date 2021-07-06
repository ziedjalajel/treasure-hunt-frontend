import { SET_USER } from "./types";
import instance from "./instance";
import decode from "jwt-decode";
import Swal from "sweetalert2";

// export const signup = (userData, history) => {
//   return async (dispatch) => {
//     try {
//       const res = await instance.post("/signup", userData);
//       dispatch({
//         type: SET_USER,
//         payload: decode(res.data.token),
//       });
//       history.push("/");
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// };

export const signup = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", userData);
      dispatch(setUser(res.data.token));
      Swal.fire("مبرووووووك يا معلم سجلت");
      history.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };
};

// export const signin = (userData, history) => {
//   return async (dispatch) => {
//     try {
//       const res = await instance.post("/signin", userData);
//       dispatch({
//         type: SET_USER,
//         payload: decode(res.data.token),
//       });
//       history.push("/");
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// };

export const signin = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", userData);
      dispatch(setUser(res.data.token));
      history.push("/", Swal.fire("مبرووووووك خشيييييت"));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const signOut = (history) => {
  history.push("/");
  return setUser();
};

const setUser = (token) => {
  if (token) {
    localStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    return {
      type: SET_USER,
      payload: decode(token),
    };
  } else {
    localStorage.removeItem("myToken");
    delete instance.defaults.headers.common.Authorization;
    return {
      type: SET_USER,
      payload: null,
    };
  }
};

export const checkForToken = (token) => {
  token = localStorage.getItem("myToken");

  if (token) {
    //check if token expiered or not when the user refresh the page
    const currentTime = Date.now();
    const user = decode(token);

    if (user.exp > currentTime) {
      return setUser(token);
    }
  }
  return setUser();
};
