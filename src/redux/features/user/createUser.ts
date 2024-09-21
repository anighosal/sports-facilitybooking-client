import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useCreateUserMutation } from "./userApi";

export type TUser = {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: "admin" | "user";
  address: string;
};
const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const createUser = createAsyncThunk(
  "user/createUser",
  async (userInfo: TUser, { rejectWithValue }) => {
    const [createUser] = useCreateUserMutation();
    try {
      const response = await createUser(userInfo).unwrap();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Save user data to state
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetUser } = userSlice.actions;

export default userSlice.reducer;
