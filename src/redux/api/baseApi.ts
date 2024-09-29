import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TAdmin, TBooking, TFacility } from "../../type/type";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://sports-facility-booking-server-beta.vercel.app/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  // tagTypes: ["Facilities"],
  endpoints: (builder) => ({
    getFacilities: builder.query<TFacility[], void>({
      query: () => "/facility",
    }),
    getFacilityDetails: builder.query<TFacility, string>({
      query: (id) => `/facility/${id}`,
    }),
    addFacility: builder.mutation<TFacility, Partial<TFacility>>({
      query: (newFacility) => ({
        url: "/facility",
        method: "POST",
        body: newFacility,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),
    updateFacility: builder.mutation<
      TFacility,
      { id: string; data: Partial<TFacility> }
    >({
      query: ({ id, data }) => ({
        url: `/facility/${id}`,
        method: "PUT",
        body: data,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
      // invalidatesTags: ["Facilities"],
    }),
    deleteFacility: builder.mutation<void, string>({
      query: (id) => ({
        url: `/facility/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
      // invalidatesTags: ["Facilities"],
    }),

    getBookings: builder.query<TBooking, void>({
      query: () => ({
        url: "/bookings",
        method: "GET",
        headers: {
          Authorization: `Bearer ${"token"}`,
          "Content-Type": "application/json",
        },
      }),
    }),
    getUserBookings: builder.query<TBooking, void>({
      query: () => ({
        url: "/bookings/user",
        headers: {
          Authorization: `Bearer ${"token"}`,
          "Content-Type": "application/json",
        },
      }),
    }),
    getUserBookingsById: builder.query<TBooking, void>({
      query: (id) => `/bookings/user/${id}`,
    }),

    cancelBooking: builder.mutation<void, string>({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),

    getAdminDetailsByid: builder.query<TAdmin, void>({
      query: (id) => `/${id}`,
    }),

    addAdmin: builder.mutation<TAdmin, Partial<TAdmin>>({
      query: (newAdmin) => ({
        url: "/create-admin",
        method: "POST",
        body: newAdmin,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),

    getAvailableSlots: builder.query({
      query: ({ date, facility }) =>
        `check-availability?date=${date}&facility=${facility}`,
    }),

    lazyCheckAvailability: builder.query({
      query: ({ date, facility }) =>
        `/check-availability?date=${date}&facility=${facility}`,
    }),
    getWelcomeMessage: builder.query<{ message: string; user: TAdmin }, string>(
      {
        query: (id) => `/welcome/${id}`,
      }
    ),

    createBooking: builder.mutation({
      query: (bookingData) => ({
        url: "create-booking",
        method: "POST",
        body: bookingData,
      }),
    }),
  }),
});

export const {
  useGetFacilitiesQuery,
  useAddFacilityMutation,
  useUpdateFacilityMutation,
  useDeleteFacilityMutation,
  useGetFacilityDetailsQuery,
  useGetBookingsQuery,
  useGetUserBookingsQuery,
  useGetUserBookingsByIdQuery,
  useCancelBookingMutation,
  useAddAdminMutation,
  useGetAvailableSlotsQuery,
  useCreateBookingMutation,
  useLazyCheckAvailabilityQuery,
  useGetWelcomeMessageQuery,
} = baseApi;
