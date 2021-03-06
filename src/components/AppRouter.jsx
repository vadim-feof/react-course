import React from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/privateRoutes";
import AuthRequire from "../hoc/AuthRequire";

const AppRouter = () => {

    return (
        <Routes>
            {privateRoutes.map(route =>
                <Route key={route.path}
                       path={route.path}
                       element={<AuthRequire>{route.element}</AuthRequire>}
                />
            )}
            {publicRoutes.map(route =>
                <Route key={route.path}
                       path={route.path}
                       element={route.element}
                />
            )}
        </Routes>
    );
};

export default AppRouter;