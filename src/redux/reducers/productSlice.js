import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  selectedProduct: null,
  isLoading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchAll",
  async (searchQuery, thunkApi) => {
    try {
      let url = `https://my-json-server.typicode.com/jhfeel/hnm-clone/products?q=${searchQuery}`;
      let response = await fetch(url);
      return await response.json();
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchProductDetail = createAsyncThunk(
  "product/fetchDetail",
  async (id, thunkApi) => {
    try {
      let url = `https://my-json-server.typicode.com/jhfeel/hnm-clone/products/${id}`;
      let response = await fetch(url);
      return await response.json();
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
// function productReducer(state = initialState, action) {
//   const { type, payload } = action;
//   switch (type) {
//     case "GET_PRODUCT_SUCCESS":
//       return { ...state, productList: payload.data };
//     case "GET_PRODUCT_DETAIL":
//       return { ...state, selectedProduct: payload.data };
//     default:
//       return { ...state };
//   }
// }

// export default productReducer;

const proudctSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    //redux에 의해 바로 호출되는 애들. 동기적으로 자신의 state 바꿀 때

    getSingleProduct(state, action) {
      state.selectedProduct = action.payload.data;
    },
  },
  //외부 라이브러리에 의해 호출되는 애들. 주로 비동기
  extraReducers: (builder) => {
    //promise를 리턴하면 promise의 상태에 따라 알아서 함수 호출
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchProductDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const productActions = proudctSlice.actions;
export default proudctSlice.reducer;
