import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  post: {},
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return null;
    case ActionTypes.FETCH_POST:
      return null;
    default:
      return state;
  }
};

export default PostsReducer;
