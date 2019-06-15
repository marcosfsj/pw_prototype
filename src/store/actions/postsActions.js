import _ from 'lodash';
import Backend from '../../config/backend/Backend';
import fetchUser from './usersActions';
import { LOAD_POSTS } from './Types';

export const loadPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(loadPosts());
  const userIds = _.uniq(_.map(getState().postList, 'userId'));
  userIds.forEach(id => dispatch(fetchUser(id)));
};

export const loadPosts = () => async dispatch => {
  const response = await Backend.get('/posts');
  dispatch({ type: LOAD_POSTS, payload: response.data });
};
