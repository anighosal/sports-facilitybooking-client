import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TAdmin, TBooking, TFacility } from "../../type/type";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5001/api",
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
  tagTypes: ["Facilities"],
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
      invalidatesTags: ["Facilities"],
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
      invalidatesTags: ["Facilities"],
    }),
    deleteFacility: builder.mutation<void, string>({
      query: (id) => ({
        url: `/facility/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // If you need auth
        },
      }),
      invalidatesTags: ["Facilities"],
    }),

    getBookings: builder.query<TBooking, void>({
      query: () => "/bookings",
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

    checkAvailability: builder.query({
      query: ({ date, facility }) =>
        `/check-availability?date=${date}&facility=${facility}`,
    }),

    // Add the lazy query
    lazyCheckAvailability: builder.query({
      query: ({ date, facility }) =>
        `/check-availability?date=${date}&facility=${facility}`,
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
  useAddAdminMutation,
  useCheckAvailabilityQuery,
  useLazyCheckAvailabilityQuery,
} = baseApi;
