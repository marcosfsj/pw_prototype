import { SAVE_COMMENT } from '../actions/types';

const initialState = {
  commentList: []
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return { ...state, commentList: [...state.commentList, action.payload] };
    default:
      return state;
  }
};

export default commentsReducer;
