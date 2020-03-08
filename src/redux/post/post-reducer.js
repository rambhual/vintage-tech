import PostTypes from "./post-types";
const initialState = {
  posts: [],
  loading: false,
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PostTypes.GET_POST:
      return {
        ...state,
        posts: [...state.posts]
      };

    case PostTypes.SET_POST:
      return {
        ...state,
        loading: false,
        error: "",
        posts: [...action.posts]
      };

    case PostTypes.POST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case PostTypes.POST_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
