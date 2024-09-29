import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: "",
    role: "",
  },
  token: "",
};

const bookingsSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setUser, setToken } = bookingsSlice.actions;

export default bookingsSlice.reducer;
