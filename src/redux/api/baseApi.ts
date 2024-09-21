import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TFacility } from "../../type/type";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
    credentials: "include",
  }),
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
  }),
});

export const {
  useGetFacilitiesQuery,
  useAddFacilityMutation,
  useUpdateFacilityMutation,
  useDeleteFacilityMutation,
  useGetFacilityDetailsQuery,
} = baseApi;
