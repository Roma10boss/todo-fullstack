import {
  SET_TODO_FAILURE,
  SET_TODOS_SUCCESS,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  ADD_TODO_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  data: [],
  error: "",
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TODOS_SUCCESS:
      return { ...state, data: payload };

	case ADD_TODO_SUCCESS:
		return { ...state, data: [payload, ...state.data] };	  

    case UPDATE_TODO_SUCCESS:
      const clonedTodos = [...state.data];
      const todoIndex = clonedTodos.findIndex((todo) => todo.id === payload.id);
      clonedTodos.splice(todoIndex, 1, payload);
      return { ...state, data: clonedTodos };

	case DELETE_TODO_SUCCESS:
		const filteredTodos = state.data.filter((todo) => parseInt(todo.id) !== parseInt(payload));
		return { ...state, data: filteredTodos };	  

    case SET_TODO_FAILURE:
      return { ...state, error: payload };

    default:
      return state;
  }
};

export default userReducer;
