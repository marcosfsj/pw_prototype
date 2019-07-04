import backend from '../../configs/backend/backend';
import { FETCH_USER, LOAD_USERS } from './types';
import parse from 'parse-link-header';

export const fetchUser = (id) => async (dispatch) => {
  const response = await backend.get(`/users/${id}`);
  dispatch({ type: FETCH_USER, payload: response.data });
}

export const loadUsers = (page = 1, limit = 15) => async (dispatch) => {
  const response = await backend.get(`/users?_page=${page}&_limit=${limit}`);
  dispatch({ 
    type: LOAD_USERS, 
    payload: { 
      userList: response.data,
      userListPagination: parse(response.headers.link)
    } 
  });
}