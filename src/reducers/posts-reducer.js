import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  post: {},
};

// I used these two articles to better understand dispatch:
// https://medium.com/@colinlmcdonald/basic-api-call-in-react-with-redux-and-intro-to-thunk-middleware-bd5244cef180
// https://stackoverflow.com/questions/43246882/what-are-store-dispatch-payloads-types-actions-connect-thunk-reducers-in
const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      // return {post: state.post, all: action.payload.data};
      return Object.assign({}, state, { all: action.payload.response.data });
    case ActionTypes.FETCH_POST:
      return Object.assign({}, state, { post: action.payload.response.data });
    default:
      return state;
  }
};

export default PostsReducer;
