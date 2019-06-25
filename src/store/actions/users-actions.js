import backend from '../../config/backend/backend';
import { FETCH_USER, LOAD_USERS } from './types';

export const fetchUser = id => async dispatch => {
  const response = await backend.get(`/users/${id}`);
  dispatch({ type: FETCH_USER, payload: response.data });
}

export const loadUsers = () => async dispatch => {
  const response = await backend.get('/users');
  dispatch({ type: LOAD_USERS, payload: response.data });
}
