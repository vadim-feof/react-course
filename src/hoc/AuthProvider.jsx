import {AuthContext} from "../context/context";
import {useState} from "react";
import AuthService from "../API/AuthService";

export const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false)

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