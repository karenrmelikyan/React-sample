import React from 'react';
import BasicMenu from "../menu/BasicMenu";
import {Route, Routes, Navigate} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Post from "../pages/Post";
import NotFound from "../pages/NotFound";

function PrivateRoutes(){
    return (
        <>
            <BasicMenu />
            <Routes>
                <Route path={'/'} element={<Home />}/>
                <Route path={'/about'} element={<About />}/>
                <Route path={'/posts'} element={<Posts />}/>
                <Route path={'/post/:id'} element={<Post />}/>
                <Route path={'/login'} element={<Navigate to={'/'}/>}/>
                <Route path={'*'} element={<NotFound/>}/>
            </Routes>
        </>
    );
}

export default PrivateRoutes;