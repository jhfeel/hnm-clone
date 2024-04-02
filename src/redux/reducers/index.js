import { combineReducers } from "redux";
import authenticationReducer from "./authenticationReducer";
import productReducer from "./productReducer";

export default combineReducers({
  auth: authenticationReducer,
  product: productReducer,
});
