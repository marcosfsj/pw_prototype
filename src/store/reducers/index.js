import { combineReducers } from 'redux';
import auth from './authReducer';
import postsReducer from './postReducer';
import usersReducer from './userReducer';
import commentsReducer from './commentReducer';

const reducers = combineReducers({
  auth: auth,
  posts: postsReducer,
  users: usersReducer,
  comments: commentsReducer
})

export default reducers;