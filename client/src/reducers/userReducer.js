import { SET_USER_SUCCESS, SET_USER_FAILURE } from "../actions/actionTypes";

const initialState = {
  data: null,
  error: ''
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER_SUCCESS:
      return { ...state, data: payload };
      
    case SET_USER_FAILURE:
        return { ...state, error: payload };      
    
    default:
        return state;
  }
};

export default userReducer;