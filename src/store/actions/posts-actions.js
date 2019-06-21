import _ from 'lodash';
import backend from '../../config/backend/backend';
import fetchUser from './users-actions';
import { LOAD_POSTS } from './types';

export const loadPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(loadPosts());
  const userIds = _.uniq(_.map(getState().postList, 'userId'));
  userIds.forEach(id => dispatch(fetchUser(id)));
};

export const loadPosts = () => async dispatch => {
  const response = await backend.get('/posts');
  dispatch({ type: LOAD_POSTS, payload: response.data });
};
