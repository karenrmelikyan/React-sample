import React, {useContext, useEffect} from "react";
import {BrowserRouter} from "react-router-dom";
import PublicRoutes from "./PubicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import {AuthContext} from "../context";

function AppRoutes() {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
        }
    }, []);

    return (
        isAuth
            ? <BrowserRouter>
                 <PrivateRoutes />
              </BrowserRouter>

            : <BrowserRouter>
                <PublicRoutes />
             </BrowserRouter>
    );
}

export default AppRoutes;