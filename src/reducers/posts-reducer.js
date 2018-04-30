import { ActionTypes } from '../actions';
import PostFunctions from '../reducers/posts-reducer';

const initialState = {
  all: [],
  post: {},
};

// I used this article to better understand dispatch: https://medium.com/@colinlmcdonald/basic-api-call-in-react-with-redux-and-intro-to-thunk-middleware-bd5244cef180
const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return PostFunctions.dispatch(state.all);
    case ActionTypes.FETCH_POST:
      return PostFunctions.dispatch(state.post);
    default:
      return state;
  }
};

export default PostsReducer;
