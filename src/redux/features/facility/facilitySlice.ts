import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FacilityState {
  currentPage: number;
  totalPages: number;
}

const initialState: FacilityState = {
  currentPage: 1,
  totalPages: 1,
};

const facilitySlice = createSlice({
  name: "facility",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
  },
});

export const { setCurrentPage, setTotalPages } = facilitySlice.actions;
export default facilitySlice.reducer;
