import {AuthContext} from "../context/context";
import {useState} from "react";
import AuthService from "../API/AuthService";
import {useNavigate} from "react-router-dom";

export const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const signIn = async (username, password, cb) => {
        try {
            setIsLoading(true)
            setError('')
            await AuthService.login(username, password)
            setIsAuth(true)
            cb()
        } catch (e) {
            setError(e.response.data.message)
            setIsAuth(false)
        } finally {
            setIsLoading(false)
        }
    }

    const signOut = (cb) => {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        setIsAuth(false)
        cb()
    }

    const auth = async (location, cb) => {
        try {
            setIsLoading(true)
            setError('')
            await AuthService.auth()
            setIsAuth(true)
            cb()
        } catch (e) {
            setError(e.response.data.message)
            setIsAuth(false)
            localStorage.removeItem('token')
            navigate('/login', {state: {from: location}})
        } finally {
            setIsLoading(false)
        }
    }

    const value = {isAuth, isLoading, error, signIn, signOut, auth}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}