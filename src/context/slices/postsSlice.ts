import { Post } from "../../types/post";

export type PostsSlice = {
    posts: Post[];
    setPosts?: (posts: Post[]) => void;
};

export const postsSlice: PostsSlice = {
    posts: []
};
