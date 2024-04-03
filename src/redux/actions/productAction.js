// import { productActions } from "../reducers/productSlice";

// function getProducts(searchQuery) {
//   //미들웨어는 함수를 리턴(인자: dispatch, getState)
//   return async (dispatch, getState) => {
//     let url = `https://my-json-server.typicode.com/jhfeel/hnm-clone/products?q=${searchQuery}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     // dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
//     dispatch(productActions.getAllProducts({ data }));
//   };
// }

// function getProductDetail(id) {
//   return async (dispatch, getState) => {
//     let url = `https://my-json-server.typicode.com/jhfeel/hnm-clone/products/${id}`;
//     let response = await fetch(url);
//     let data = await response.json();
//     dispatch({ type: "GET_PRODUCT_DETAIL", payload: { data } });
//     dispatch(productActions.getProductDetail({ data }));
//   };
// }

// export const productAction = { getProducts, getProductDetail };
// export const productAction = { getProductDetail };
