import { LOGOUT_USER_SUCCESS, SET_USER_SUCCESS } from "./actionTypes";

export const createUser = (data) => async (dispatch) => {
  try {
    let res = await fetch("http://localhost:3001/api/v1/users", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    res = await res.json();
    if (res.user) dispatch({ type: SET_USER_SUCCESS, payload: res.user });
    return res;
  } catch (err) {
    dispatch({ type: SET_USER_SUCCESS, payload: err });
  }
};

export const loginUser = (data) => async (dispatch) => {
  try {
    let res = await fetch("http://localhost:3001/api/v1/login", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    res = await res.json();
    if (res.user) dispatch({ type: SET_USER_SUCCESS, payload: res.user });
    return res;
  } catch (err) {
    dispatch({ type: SET_USER_SUCCESS, payload: err });
  }
};

export const logoutUser = () => dispatch => {
    localStorage.clear();
    dispatch({ type: LOGOUT_USER_SUCCESS });
}
