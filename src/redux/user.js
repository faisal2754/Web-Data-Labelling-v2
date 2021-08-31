import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState:{
      username: "",
      balance: 0,
      email: "",
      jwt: ""
  },
  reducers: {
     updateUsername : (state, action) => {
         state.username = action.payload;
     },

     updateBalance: (state, action) => {
         state.balance = action.payload;
     },

     updateEmail: (state, action) => {
         state.email = action.payload;
     },

     updateJWT: (state, action) => {
        state.jwt = action.payload;
     }
  }

});

export const { updateBalance, updateEmail, updateJWT, updateUsername } = userSlice.actions;

export default userSlice.reducer;