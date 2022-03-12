import React from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/privateRoutes";

const AppRouter = () => {
    const isAuth = false
    return (
        <Routes>
        {isAuth
            ?
            privateRoutes.map(route =>
                <Route key={route.path}
                       path={route.path}
                       element={route.element}
                />
            )
            :
            publicRoutes.map(route =>
                <Route key={route.path}
                       path={route.path}
                       element={route.element}
                />
            )
        }
        </Routes>
    );
};

export default AppRouter;