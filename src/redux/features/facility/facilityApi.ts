// src/redux/features/facility/facilityApi.ts
import { TFacility } from "../../../type/type";
import { baseApi } from "../../api/baseApi";

const facilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFacilities: builder.query<TFacility[], void>({
      query: () => "/facilities",
      providesTags: ["Facility"],
    }),
    addFacility: builder.mutation<TFacility, Partial<TFacility>>({
      query: (newFacility) => ({
        url: "/facilities",
        method: "POST",
        body: newFacility,
      }),
      invalidatesTags: ["Facility"],
    }),
    updateFacility: builder.mutation<
      Facility,
      { id: string; data: Partial<Facility> }
    >({
      query: ({ id, data }) => ({
        url: `/facilities/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Facility"],
    }),
    deleteFacility: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/facilities/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Facility"],
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetFacilitiesQuery,
  useAddFacilityMutation,
  useUpdateFacilityMutation,
  useDeleteFacilityMutation,
} = facilityApi;

export default facilityApi;
