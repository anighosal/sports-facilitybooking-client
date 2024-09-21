// src/redux/features/facilities/facilitiesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TFacility } from "../../../type/type";

interface FacilitiesState {
  facilities: TFacility[];
  isLoading: boolean;
  error: string | null;
}

const initialState: FacilitiesState = {
  facilities: [],
  isLoading: false,
  error: null,
};

const facilitiesSlice = createSlice({
  name: "facilities",
  initialState,
  reducers: {
    setFacilities: (state, action: PayloadAction<TFacility[]>) => {
      state.facilities = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setFacilities, setLoading, setError } = facilitiesSlice.actions;

export default facilitiesSlice.reducer;
