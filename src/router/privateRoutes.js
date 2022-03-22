import Posts from "../pages/Posts";
import {Navigate} from "react-router-dom";
import React from "react";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import About from "../pages/About";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

export const privateRoutes = [
    {path: "/posts", element: <Posts/>},
    {path: "/posts/:postId", element: <PostIdPage/>},
    {path: "/about", element: <About/>},
    {path: "/error", element: <Error/>},
    {path: "*", element: <Navigate to="/error"/>},
    {path: "/login", element: <Navigate to="/posts"/>}
]

export const publicRoutes = [
    {path: "/about", element: <About/>},
    {path: "*", element: <Navigate to="/login"/>},
    {path: "/login", element: <Login/>},
    {path: "/registration", element: <Registration/>},
]