// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { TAvailability, TBooking } from "../../type/type";
// import { baseApi } from "../api/baseApi";

// interface BookingState {
//   availability: TAvailability[];
//   booking: TBooking | null;
//   loading: boolean;
//   error: string | null;
// }

// const initialState: BookingState = {
//   availability: [],
//   booking: null,
//   loading: false,
//   error: null,
// };

// const bookingSlice = createSlice({
//   name: "booking",
//   initialState,
//   reducers: {
//     resetBooking: (state) => {
//       state.booking = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // Fetch availability
//       .addMatcher(
//         baseApi.endpoints.checkAvailability.matchFulfilled,
//         (state, action: PayloadAction<TAvailability[]>) => {
//           state.availability = action.payload;
//           state.loading = false;
//           state.error = null;
//         }
//       )
//       // Create booking
//       .addMatcher(
//         baseApi.endpoints.createBooking.matchFulfilled,
//         (state, action: PayloadAction<TBooking>) => {
//           state.booking = action.payload;
//           state.loading = false;
//           state.error = null;
//         }
//       )
//       .addMatcher(baseApi.endpoints.createBooking.matchPending, (state) => {
//         state.loading = true;
//       })
//       .addMatcher(
//         baseApi.endpoints.createBooking.matchRejected,
//         (state, action) => {
//           state.loading = false;
//           state.error = action.error.message || "Booking failed.";
//         }
//       );
//   },
// });

// export const { resetBooking } = bookingSlice.actions;
// export default bookingSlice.reducer;
