import { TBooking } from "../../../type/type";
import { baseApi } from "../../api/baseApi";

const bookingsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBookings: builder.query<TBooking[], void>({
      query: () => {
        const role = localStorage.getItem("role");
        console.log(role);
        const url = role === "admin" ? "/bookings" : "/bookings/user";
        return url;
      },
    }),
  }),
});

export const { useGetBookingsQuery } = bookingsApi;
export const bookingsReducer = bookingsApi.reducer;
