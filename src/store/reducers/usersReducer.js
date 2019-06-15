import { FETCH_USER, LOAD_USERS } from '../actions/types';

const initialState = {
  userList: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, userList: [...state.userList, action.payload] };
    case LOAD_USERS:
      return { ...state, userList: [...action.payload] };
    default:
      return state;
  }
};

export default usersReducer;
