import React from 'react';
import LoginMenu from "../menu/LoginMenu";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

function PublicRoutes(){
    return (
        <>
            <LoginMenu />
            <Routes>
                <Route path={'/'} element={<Home />}/>
                <Route path={'/login'} element={<Login />}/>
                <Route path={'*'} element={<Navigate to={'/login'} />}/>
            </Routes>
        </>
    );
}

export default PublicRoutes;