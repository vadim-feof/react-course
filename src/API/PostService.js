import axios from "axios";
import {config} from "../config.js";

const instance = axios.create({
    baseURL: config.baseURL
})

export default class PostService {
    static async getAll(limit = 10, page = 1) {
        const response = await instance.get('posts', {
            params: {
                _limit: limit,
                _page: page
            },
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        return response
    }

    static async getById(id) {
        const response = await instance.get(`posts/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        return response
    }

    static async getCommentsByPostId(id) {
        const response = await instance.get(`posts/${id}/comments`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        return response
    }

    static async createPost(post) {
        const response = await instance.post(`posts`, {
            ...post
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        return response
    }

    static async deletePost(id) {
        const response = await instance.delete(`posts/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        return response
    }

    static async updatePost(post) {
        const response = await instance.put(`posts`, {
            ...post
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        return response
    }
}