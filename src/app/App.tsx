import { useEffect, useState } from "react";
import { ThemeProvider } from "react-bootstrap";
import { RouterProvider } from "react-router";

import { context, Store } from "../context/context";
import { fetch } from "../helpers/fetch";
import { router } from "../router/router";
import { Photo } from "../types/photo";
import { Post } from "../types/post";
import { User } from "../types/user";

const BREAKPOINTS = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"];
const MIN_BREAKPOINT = "xxs";

export function App() {
    const { Provider } = context;

    const [store, setStore] = useState<Store>({
        photos: [],
        posts: [],
        users: []
    });

    useEffect(() => {
        const fetchAll = async () => {
            const photos = await fetch<Photo[]>(
                "https://jsonplaceholder.typicode.com/photos",
                "GET"
            );
            const posts = await fetch<Post[]>(
                "https://jsonplaceholder.typicode.com/posts",
                "GET"
            );
            const users = await fetch<User[]>(
                "https://jsonplaceholder.typicode.com/users",
                "GET"
            );

            setStore({
                photos: photos ?? [],
                posts: posts ?? [],
                users: users ?? []
            });
        };

        fetchAll().catch(console.error);
    }, []);

    return (
        <Provider value={store}>
            <ThemeProvider
                breakpoints={BREAKPOINTS}
                minBreakpoint={MIN_BREAKPOINT}
            >
                <RouterProvider router={router} />
            </ThemeProvider>
        </Provider>
    );
}
