import { apiSlice } from "./../api/apiSlice";

export const conversationsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConversations: builder.query({
      query: (email) => `conversations?participants_like=${email}&_sort=timestamp&_order=desc&_page=1&_limit=5`,
    }),
    getConversation: builder.query({
      query: ({ userEmail, participantEmail }) =>
        `conversations?participants_like=${userEmail}-${participantEmail}&participants_like=${participantEmail}-${userEmail}`,
    }),
    newConversation: builder.mutation({
      query: (data) => ({
        url: `conversations`,
        method: "POST",
        body: data,
      }),
    }),
    editConversation: builder.mutation({
      query: ({ data, id }) => ({
        url: `conversations/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetConversationsQuery,
  useGetConversationQuery,
  useNewConversationMutation,
  useEditConversationMutation,
} = conversationsApi;
