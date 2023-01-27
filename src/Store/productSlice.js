import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const STATUSES = Object.freeze({
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.SUCCESS,
  },

  //   reducers: {
  //     setProducts(state, action) {
  //       return (state.data = action.payload);
  //     },

  //     setstatus(state, action) {
  //       return (state.status = action.payload);
  //     },
  //   },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.SUCCESS;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const fetchProducts = createAsyncThunk("fetch/products", async () => {
  const products = await fetch("https://fakestoreapi.com/products");
  const res = await products.json();
  return res;
});
// export function fetchProducts() {
//     async function fetchProductsThunk(dispatch, getState) {
//       dispatch(setstatus(STATUSES.LOADING));
//       try {
//         const products = await fetch("https://fakestoreapi.com/products");
//         const res = await products.json();
//         dispatch(setProducts(res));
//         dispatch(setstatus(STATUSES.SUCCESS));
//       } catch (error) {
//         console.log(error.message);
//         dispatch(setstatus(STATUSES.ERROR));
//       }
//     }
//   }
export const { setProducts, status } = productSlice.actions;
export default productSlice.reducer;
