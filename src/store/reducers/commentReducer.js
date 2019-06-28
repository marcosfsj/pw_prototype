import {
  SAVE_COMMENT,
  LOAD_COMMENTS
} from '../actions/types';

const initialState = {
  commentList: []
};

const commentsReducer = (state = initialState, action) => {

  switch (action.type) {
    case SAVE_COMMENT:
      return { ...state, commentList: [...state.commentList, action.payload] };
    case LOAD_COMMENTS:
      return { ...state, commentList: [...action.payload] };
    default:
      return state;
  }
}

export default commentsReducer;
