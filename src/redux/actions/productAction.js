function getProducts(searchQuery) {
  //미들웨어는 함수를 리턴(인자: dispatch, getState)
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/jhfeel/hnm-clone/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
}

export const productAction = { getProducts };
