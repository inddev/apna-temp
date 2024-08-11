import { configureStore } from "@reduxjs/toolkit";
import scriptureReducer from "./scriptureSlice";

const store = configureStore({
  reducer: {
    scripture: scriptureReducer,
  },
});

export default store;
