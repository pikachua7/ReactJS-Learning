import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

export const appStore = configureStore({
  // Add Slices inside here
  // This reducer contains the reducers of each slice in the store we need
  reducer: {
    cart: cartSlice,
  },
});
