import { createContext } from "react";

import { UsersSlice, usersSlice } from ".//slices/usersSlice";
import { PhotosSlice, photosSlice } from "./slices/photosSlice";
import { PostsSlice, postsSlice } from "./slices/postsSlice";

export type Store = PhotosSlice & PostsSlice & UsersSlice;

const defaultStore: Store = {
    ...photosSlice,
    ...postsSlice,
    ...usersSlice
};

export const context = createContext(defaultStore);
