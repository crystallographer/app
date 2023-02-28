import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Post } from "../types/post";

type PostsState = {
    list: Post[];
};

const initialState: PostsState = {
    list: []
};

const { actions, reducer } = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPosts: (state, { payload }: PayloadAction<Post[]>) => {
            state.list = payload;
        }
    }
});

export const { addPosts } = actions;
export const postsReducer = reducer;
