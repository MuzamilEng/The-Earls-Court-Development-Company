import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const storeApi = createApi({
    reducerPath: 'storeApi',
    baseQuery: fetchBaseQuery({ baseUrl: ' http://localhost:5000/api/v1' }),
    endpoints: (builder) => ({
        getHomeContent: builder.query({
            query: () => `/home`,
        }),
        getPostById: builder.query({
            query: (id) => `/posts/${id}`,
          }),
          getPosts: builder.query({
            query: () => `/posts`,
        }),
        addHomeContent: builder.mutation({
            query: (data) => ({
                url: '/home',
                method: 'POST',
                body: data,
            }),
        }),
        updateHomeContent: builder.mutation({
            query: ({ id, data }) => ({
              url: `/edit-home/${id}`,
              method: 'PUT',
              body: data,
            }),
        }),
        addHomePost: builder.mutation({
            query: (data) => ({
                url: '/Posts',
                method: 'POST',
                body: data,
            }),
        }),
        updateHomePost: builder.mutation({
            query: ({ id, data }) => ({
              url: `/editPost/${id}`,
              method: 'PUT',
              body: data,
            }),
        }),
        deletePost: builder.mutation({
            query: (id) => ({
              url: `/posts/${id}`,
              method: 'DELETE',
            }),
          }),
        loginAdmin: builder.mutation({
            query: (data) => ({
                url: '/auth/login',
                method: 'POST',
                body: data,
            }),
        }),
    })
})

export const {
    useGetHomeContentQuery,
    useAddHomeContentMutation,
    useUpdateHomeContentMutation,
    useAddHomePostMutation,
    useLoginAdminMutation,
    useGetPostsQuery,
    useGetPostByIdQuery,
    useDeletePostMutation,
    useUpdateHomePostMutation,
} = storeApi