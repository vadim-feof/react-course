import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route exact path="/posts" element={<Posts/>}/>
            <Route exact path="/posts/:postId" element={<PostIdPage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/error" element={<Error/>}/>
            <Route path="*" element={<Navigate to="/error"/>}/>
        </Routes>
    );
};

export default AppRouter;