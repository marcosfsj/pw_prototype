import { combineReducers } from 'redux';
import auth from './auth-reducer';
import postsReducer from './posts-reducer';
import usersReducer from './users-reducer';
import commentsReducer from './comments-reducer';

const reducers = combineReducers({
  auth: auth,
  posts: postsReducer,
  users: usersReducer,
  comments: commentsReducer
})

export default reducers;
