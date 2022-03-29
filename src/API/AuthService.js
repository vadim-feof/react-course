import axios from "axios";
import {config} from "../config.js";

const instance = axios.create({
    baseURL: config.baseURL,
})

export default class AuthService {
    static async login(username, password) {
        try {
            const response = await instance.post('login', {
                username, password
            })
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('username', response.data.username)
            return response.data
        } catch (e) {
            return {
                error: e.response.data.message
            }
        }
    }

    static async registration(username, password) {
        const response = await instance.post('registration', {
            username, password
        })
        return response.data
    }

    static async auth() {
        try {
            const response = await instance.get('auth',{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('username',response.data.username)
            return response.data
        } catch(e)  {
            localStorage.removeItem('token')
            localStorage.removeItem('username')
            return {
                error: e.response.data.message
            }
        }

    }
}