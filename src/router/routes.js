import Posts from "../pages/Posts";
import {Navigate} from "react-router-dom";
import React from "react";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import About from "../pages/About";

export const routes = [
    {path: "/posts", element: <Posts/>},
    {path: "/posts/:postId", element: <PostIdPage/>},
    {path: "/about", element: <About/>},
    {path: "/error", element: <Error/>},
    {path: "*", element: <Navigate to="/error"/>},
]