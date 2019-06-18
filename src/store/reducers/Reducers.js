import { combineReducers } from 'redux';
import auth from './auth-reducer';
import postsReducer from './posts-reducer';
import usersReducer from './users-reducer';

const reducers = combineReducers({
  auth: auth,
  posts: postsReducer,
  users: usersReducer
});

export default reducers;
