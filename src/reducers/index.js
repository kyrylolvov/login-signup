import { combineReducers } from "redux";
import logInReducer from "./logInReducer";
import meReducer from "./meReducer";
import signUpReducer from "./signUpReducer";

export default combineReducers({
  SignUpInfo: signUpReducer,
  LogInInfo: logInReducer,
  MeInfo: meReducer,
});
