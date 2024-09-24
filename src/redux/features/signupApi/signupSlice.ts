import { createSlice } from "@reduxjs/toolkit";
import { signupApi } from "../signupApi/signupApi";

// Define the initial state for the signup slice
const initialState = {
  isLoading: false,
  error: null,
  success: false,
};

// Create the signup slice
const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    resetSignupState: (state) => {
      state.isLoading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle pending state
      .addMatcher(signupApi.endpoints.signup.matchPending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })
      // Handle fulfilled (success) state
      .addMatcher(signupApi.endpoints.signup.matchFulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.success = true;
      })
      // Handle rejected (error) state
      .addMatcher(signupApi.endpoints.signup.matchRejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
        state.success = false;
      });
  },
});

// Export the reset action
export const { resetSignupState } = signupSlice.actions;

// Export the signup reducer to be added to your store
export default signupSlice.reducer;
