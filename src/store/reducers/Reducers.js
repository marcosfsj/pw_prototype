import { combineReducers } from 'redux';
import Auth from './authReducer';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

const Reducers = combineReducers({
  auth: Auth,
  posts: postsReducer,
  users: usersReducer
});

export default Reducers;
