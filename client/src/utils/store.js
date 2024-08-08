import { configureStore } from "@reduxjs/toolkit";
import scriptureReducer from "./scriptureSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    scripture: scriptureReducer,
    user: userSlice,
  },
});

export default store;
