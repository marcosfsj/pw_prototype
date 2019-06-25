import { LOAD_POSTS } from '../actions/types';

const initialState = {
  postList: []
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return { ...state, postList: action.payload };
    default:
      return state;
  }
}

export default postsReducer;
