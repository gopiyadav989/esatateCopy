// productsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  likedProducts: [], // Initial state with an empty array
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addLikedProduct(state, action) {
      state.likedProducts.push(action.payload); // Add product to the likedProducts array
    },
    removeLikedProduct(state, action) {
      state.likedProducts = state.likedProducts.filter(product => product._id !== action.payload); // Remove product from the likedProducts array
    },
  },
});

export const { addLikedProduct, removeLikedProduct } = productsSlice.actions;

export default productsSlice.reducer;
