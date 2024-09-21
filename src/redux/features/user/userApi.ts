import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (userInfo) => ({
        url: "/users/create-user",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useCreateUserMutation } = userApi;
