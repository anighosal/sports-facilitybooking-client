import { baseApi } from "../../api/baseApi";

const addAdminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addAdmin: builder.mutation({
      query: (userInfo) => ({
        url: "/admin/create-admin",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useAddAdminMutation } = addAdminApi;
