import React, {useEffect, useState} from "react";
import './styles/App.css'
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context/context";

function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [authIsLoading, setAuthIsLoading] = useState(true)
    useEffect( () => {
        if (localStorage.getItem('auth'))
            setIsAuth(true)
        setAuthIsLoading(false)
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            authIsLoading
        }}>
            <BrowserRouter>
                <div className="navbar">
                    <Navbar/>
                </div>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
