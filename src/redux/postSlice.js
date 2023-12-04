import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  //base url is up to "https://jsonplaceholder.typicode.com/"
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      //posts is the name of the query, the endpoint of https://jsonplaceholder.typicode.com/posts
      query: () => "posts",
    }),
    //get post by id
    getPostsId: builder.query({
     //pass parameters to the query
      query: (id) => `posts/${id}`,
    }),
  }),
});
export const { useGetAllPostsQuery, useGetPostsIdQuery } = postsApi;