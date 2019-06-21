import { SAVE_COMMENT } from './types';

export const saveComment = comment => dispatch => {
  return { type: SAVE_COMMENT, payload: comment };
};