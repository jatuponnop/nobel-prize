import { configureStore } from "@reduxjs/toolkit";
import prizesReducer from "./prizes";

export default configureStore({
  reducer: {
    prizes: prizesReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
});