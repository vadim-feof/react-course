import React from "react";
import './styles/App.css'
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";

function App() {
    return (
        <BrowserRouter>
            <div className="navbar">
                <Navbar/>
            </div>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
