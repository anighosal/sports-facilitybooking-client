import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface ErrorResponse {
  message: string;
}

export const createAdmin = createAsyncThunk<
  { admin: any; message: string },
  any,
  { rejectValue: ErrorResponse }
>("admin/add-admin", async (adminData, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/admins",
      adminData
    );
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data as ErrorResponse);
  }
});

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    admin: null,
    loading: false,
    successMessage: "",
    errorMessage: "",
  },
  reducers: {
    resetAdminState: (state) => {
      state.successMessage = "";
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAdmin.pending, (state) => {
        state.loading = true;
        state.successMessage = "";
        state.errorMessage = "";
      })
      .addCase(createAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload.admin;
        state.successMessage = action.payload.message;
        state.errorMessage = "";
      })
      .addCase(
        createAdmin.rejected,
        (state, action: PayloadAction<ErrorResponse | undefined>) => {
          state.loading = false;
          state.successMessage = "";

          state.errorMessage = action.payload?.message || "An error occurred";
        }
      );
  },
});

export const { resetAdminState } = adminSlice.actions;
export default adminSlice.reducer;
