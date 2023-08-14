import { apiSlice } from "./../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({
        url: "users",
        method: "POST",
        body: data,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "users",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = authApi;
