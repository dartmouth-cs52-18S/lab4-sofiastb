import { ActionTypes } from '../actions';
import PostFunctions from '../reducers/posts-reducer';

const initialState = {
  all: [],
  post: {},
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return PostFunctions.fetchPosts();
    case ActionTypes.FETCH_POST:
      return null;
    default:
      return state;
  }
};

export default PostsReducer;
