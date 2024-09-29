import { createSlice, SerializedError } from "@reduxjs/toolkit";
import { signupApi } from "../signupApi/signupApi";

interface SignupState {
  isLoading: boolean;
  error: SerializedError | null;
  success: boolean;
}

const initialState: SignupState = {
  isLoading: false,
  error: null,
  success: false,
};

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

      .addMatcher(signupApi.endpoints.signup.matchPending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })

      .addMatcher(signupApi.endpoints.signup.matchFulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.success = true;
      })

      .addMatcher(signupApi.endpoints.signup.matchRejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
        state.success = false;
      });
  },
});

export const { resetSignupState } = signupSlice.actions;

export default signupSlice.reducer;
