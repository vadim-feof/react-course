import {AuthContext} from "../context/context";
import {useState} from "react";
import AuthService from "../API/AuthService";
import {Navigate, useNavigate} from "react-router-dom";

export const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false)
    const navigate = useNavigate()
    const signIn = async (loginData, cb) => {
        const user = await AuthService.login(loginData.username, loginData.password)
        if (!user.error) {
            setIsAuth(true)
            cb()
        }
        else {
            return user.error
        }
    }

    const signOut = (cb) => {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        setIsAuth(false)
        cb()
    }

    const auth = async (cb) => {
        const user = await AuthService.auth()
        if (!user.error) {
            setIsAuth(true)
            cb()
        }
        else {
            navigate('/login')
            return user.error
        }
    }

    const value = {isAuth, signIn, signOut, auth}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}