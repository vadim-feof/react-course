import React from "react";
import './styles/App.css'
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthProvider} from "./hoc/AuthProvider";

function App() {

    return (
        <BrowserRouter>
            <AuthProvider>
                <div className="navbar">
                    <Navbar/>
                </div>
                <AppRouter/>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
