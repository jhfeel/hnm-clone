// import { applyMiddleware, createStore } from "redux";
// import { thunk } from "redux-thunk";
// import rootReducer from "./reducers";
// import { composeWithDevTools } from "@redux-devtools/extension";

import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./reducers/authenticationReducer";
import productReducer from "./reducers/productSlice";

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

const store = configureStore({
  reducer: {
    auth: authenticationReducer,
    product: productReducer,
  },
});

export default store;
