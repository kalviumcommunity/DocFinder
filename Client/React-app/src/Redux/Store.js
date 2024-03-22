import { configureStore } from "@reduxjs/toolkit";
import { LoaderSlice } from "./LoaderReducer";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  loader: LoaderSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
