import { 
  FETCH_USER, 
  LOAD_USERS
} from '../actions/types';

const initialState = {
  userList: [],
  userListPagination: {}
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, userList: [...state.userList, action.payload] };
    case LOAD_USERS: 
      return { ...state, userList: action.payload.userList, userListPagination: action.payload.userListPagination };
    default:
      return state;
  }
}

export default usersReducer;
