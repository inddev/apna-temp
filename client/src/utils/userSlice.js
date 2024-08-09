import { createSlice } from "@reduxjs/toolkit";
import { userData } from "./userData";
const initialState = {
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      const { userDetails } = action.payload;
      const user = userData.find((user) => user.email === userDetails.email);
      if (!user) {
        return alert("user not found with given email id");
      } else if (user.password !== userDetails.password) {
        return alert("password is incorrect");
      } else {
        state.isAuthenticated = true;
      }
    },
    logout(state) {
      state.currUser = null;
    },
    register(state, action) {
      state.user = action.payload;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
