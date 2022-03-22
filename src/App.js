import React, {useEffect, useState} from "react";
import './styles/App.css'
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context/context";
import {useFetching} from "./hooks/useFetching";
import AuthService from "./API/AuthService";

function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [fetchAuth, authLoading, authError] = useFetching(async () => {
        const data = await AuthService.auth()
        localStorage.setItem('token', data.token)
        setIsAuth(true)
    })

    useEffect(async () => {
        if (localStorage.getItem('token'))
            fetchAuth()
        else {
            localStorage.removeItem('username')
        }
    }, [])

    if (authError) {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
    }

    return (
        <AuthContext.Provider value={{
            isAuth, setIsAuth,
            authLoading
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
