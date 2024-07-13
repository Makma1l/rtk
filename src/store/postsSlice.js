import { createSlice } from "@reduxjs/toolkit";

const initialState = { posts: [] };

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts(state, action) {
      state.posts = action.payload;
    },
    addPost(state, action) {
      state.posts.push(action.payload);
    },
    deletePost(state, action) {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    editPost(state, action) {
      state.posts = state.posts.map((post) =>
        post.id === action.payload.id ? { ...action.payload } : post
      );
    },
  },
});

export const { addPost, deletePost, editPost, addPosts } = postsSlice.actions;
export default postsSlice.reducer;
