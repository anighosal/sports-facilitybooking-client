import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TAdmin } from "../../../type/type";

interface AdminState {
  admins: TAdmin[];
}

const initialState: AdminState = {
  admins: [],
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    addAdmin: (state, action: PayloadAction<TAdmin>) => {
      state.admins.push(action.payload);
    },
    setAdmins: (state, action: PayloadAction<TAdmin[]>) => {
      state.admins = action.payload;
    },
  },
});

export const { addAdmin, setAdmins } = adminSlice.actions;
export default adminSlice.reducer;
