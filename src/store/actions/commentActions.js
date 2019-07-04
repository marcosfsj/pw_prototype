import {
  SAVE_COMMENT,
  LOAD_COMMENTS
} from './types';
import backend from '../../configs/backend/backend';

export const saveComment = (comment) => (dispatch) => {
  dispatch({ type: SAVE_COMMENT, payload: comment });
}

export const loadComments = () => async (dispatch) => {
  const response = await backend.get('/comments');
  dispatch({ type: LOAD_COMMENTS, payload: response.data });
}