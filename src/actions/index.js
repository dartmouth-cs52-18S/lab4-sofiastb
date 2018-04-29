// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  // UPDATE_POST: 'UPDATE_POST',
  // CREATE_POST: 'CREATE_POST',
  // DELETE_POST: 'DELETE_POST',
};

export default function (state = null, action) {
  switch (action.type) {
    case 'FETCH_POST':
      return { /* selectedPost: action.post */ };
    case 'FETCH_POSTS':
      return {/* posts: posts */};
    default:
      return state;
  }
}
