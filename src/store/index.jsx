import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import apiMiddleWare from "../middleWare";
import reducer from "../reducers";
export default function index() {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), apiMiddleWare],
  });
}
