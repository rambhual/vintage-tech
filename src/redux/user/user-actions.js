import axios from "axios";
import userTypes from "./user-types";

export function setUsers(users) {
  return {
    type: userTypes.SET_USERS,
    users
  };
}

export const fetchUsers = () => {
  return dispatch => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      dispatch(setUsers(res.data));
    });
  };
};
