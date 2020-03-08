import UserTypes from "./user-types";
const initialState = {
  users: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case UserTypes.GET_CURRENT_USER:
      return { ...state, users: [...state.users] };

    case UserTypes.SET_USERS:
      return action.users;

    default:
      return state;
  }
};
