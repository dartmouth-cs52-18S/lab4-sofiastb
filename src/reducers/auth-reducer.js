import { ActionTypes } from '../actions';

const initialState = {
  authenticated: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      // return {post: state.post, all: action.payload.data};
      return Object.assign({}, state, { authenticated: true });
    case ActionTypes.DEAUTH_USER:
      return Object.assign({}, state, { authenticated: false });
    case ActionTypes.AUTH_ERROR:
      return Object.assign({}, state, { authenticated: false });
    default:
      return state;
  }
};

export default AuthReducer;
