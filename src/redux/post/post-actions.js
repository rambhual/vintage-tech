import axios from "axios";
import PostTypes from "./post-types";

function setPost(posts) {
  return {
    type: PostTypes.SET_POST,
    posts
  };
}

function setLoadingPost() {
  return {
    type: PostTypes.POST_LOADING
  };
}

function setErrorPost(error) {
  return {
    type: PostTypes.POST_ERROR,
    error: error
  };
}

export const fetchPost = () => {
  return dispatch => {
    dispatch(setLoadingPost());
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => dispatch(setPost(res.data)))
      .catch(error => dispatch(setErrorPost(error.message)));
  };
};
