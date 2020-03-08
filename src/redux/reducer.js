import { combineReducers } from "redux";
import users from "./user/user-reducer";
import posts from "./post/post-reducer";
export default combineReducers({
  users,
  posts
});
