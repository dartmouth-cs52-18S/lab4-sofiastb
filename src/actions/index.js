import axios from 'axios';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
};

const ROOT_URL = 'https://lab5api.herokuapp.com/api';
// const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
// const API_KEY = '?key=sofia_stanescu-bellu';

export function fetchPosts() {
  /* axios get */
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts`).then((response) => {
      dispatch({ type: ActionTypes.FETCH_POSTS, payload: { response } });
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function createPost(post, history) {
  /* axios post */
  const fields = {
    title: post.title, content: post.content, tags: post.tags, cover_url: post.coverImage,
  };

  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts`, fields).then((response) => {
      history.push('/');
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function fetchPost(id) {
  /* axios get */
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}`).then((response) => {
      dispatch({ type: ActionTypes.FETCH_POST, payload: { response } });
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function updatePost(id, post) {
  /* axios put */
  const fields = {
    title: post.title, content: post.content, tags: post.tags, cover_url: post.cover_url,
  };
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${id}`, fields).then((response) => {
      dispatch({ type: ActionTypes.FETCH_POST, payload: { response } });
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function deletePost(id, history) {
  /* axios delete */
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}`).then((response) => {
      history.push('/');
    }).catch((error) => {
      console.log(error);
    });
  };
}
