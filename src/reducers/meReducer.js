export default (
  state = { message: "Loading data, please wait...", status: null },
  action
) => {
  switch (action.type) {
    case "USER_ME":
      return {
        ...state,
        message: action.payload.data.body.message,
        status: action.payload.data.statusCode,
      };
    default:
      return state;
  }
};
