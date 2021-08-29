import {
  DELETE_TODO_SUCCESS,
  SET_TODOS_SUCCESS,
  UPDATE_TODO_SUCCESS,
  SET_TODO_FAILURE,
  ADD_TODO_SUCCESS,
} from "./actionTypes";

export const addTodo =
  (data) =>
  async (dispatch) => {
    const jwt = localStorage.getItem("jwt");
    try {
      let res = await fetch(`http://localhost:3001/api/v1/todos`, {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      });
      res = await res.json();
      dispatch({ type: ADD_TODO_SUCCESS, payload: res });
    } catch (err) {
      dispatch({ type: SET_TODO_FAILURE, payload: err });
    }
  };

export const getTodos = () => async (dispatch) => {
  const jwt = localStorage.getItem("jwt");
  try {
    let res = await fetch("http://localhost:3001/api/v1/todos", {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    res = await res.json();
    dispatch({ type: SET_TODOS_SUCCESS, payload: res });
  } catch (err) {
    dispatch({ type: SET_TODO_FAILURE, payload: err });
  }
};

export const updateTodo =
  ({ id, ...data }) =>
  async (dispatch) => {
    const jwt = localStorage.getItem("jwt");
    try {
      let res = await fetch(`http://localhost:3001/api/v1/todos/${id}`, {
        method: "put",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      });
      res = await res.json();
      dispatch({ type: UPDATE_TODO_SUCCESS, payload: res });
    } catch (err) {
      dispatch({ type: SET_TODO_FAILURE, payload: err });
    }
  };

export const deleteTodo = (id) => async (dispatch) => {
  const jwt = localStorage.getItem("jwt");
  try {
    await fetch(`http://localhost:3001/api/v1/todos/${id}`, {
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    dispatch({ type: DELETE_TODO_SUCCESS, payload: id });
  } catch (err) {
    dispatch({ type: SET_TODO_FAILURE, payload: err });
  }
};
