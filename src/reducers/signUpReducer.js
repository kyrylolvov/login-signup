export default (
  state = { message: "Enter your credentials to sign up" },
  action
) => {
  switch (action.type) {
    case "USER_SIGNUP":
      return { ...state, message: action.payload.message };
    default:
      return state;
  }
};
