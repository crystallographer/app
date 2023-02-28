import { configureStore } from "@reduxjs/toolkit";

import { photosReducer } from "./slices/photosSlice";
import { postsReducer } from "./slices/postsSlice";
import { usersReducer } from "./slices/usersSlice";

export const store = configureStore({
    reducer: {
        photos: photosReducer,
        posts: postsReducer,
        users: usersReducer
    }
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
export type DispatchHook = () => StoreDispatch;
