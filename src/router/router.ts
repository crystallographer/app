import { createBrowserRouter, RouteObject } from "react-router-dom";

import { Home } from "../pages/Home";
import { Photos } from "../pages/Photos";
import { Posts } from "../pages/Posts";
import { Users } from "../pages/Users";

const ROUTES: RouteObject[] = [
    {
        path: "/",
        element: Home()
    },
    {
        path: "/photos",
        element: Photos()
    },
    {
        path: "/posts",
        element: Posts()
    },
    {
        path: "/users",
        element: Users()
    }
];

export const router = createBrowserRouter(ROUTES);
