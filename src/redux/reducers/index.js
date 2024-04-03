import { combineReducers } from "redux";
import authenticationReducer from "./authenticationReducer";
import productReducer from "./productSlice";

export default combineReducers({
  auth: authenticationReducer,
  product: productReducer,
});
