import { SAVE_COMMENT } from './types';

export const saveComment = comment => dispatch => {
  dispatch({ type: SAVE_COMMENT, payload: comment });
};