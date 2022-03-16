import axios from "axios";
// http://localhost:5000/api/
// https://damp-spire-86619.herokuapp.com/api
const instance = axios.create({
    baseURL: 'https://damp-spire-86619.herokuapp.com/api',
})

export default class PostService {
    static async getAll(limit = 10, page = 1) {
        const response = await instance.get('posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response
    }

    static async getById(id) {
        const response = await instance.get(`posts/${id}`)
        return response
    }

    static async getCommentsByPostId(id) {
        const response = await instance.get(`posts/${id}/comments`)
        return response
    }

    static async createPost(post) {
        const response = await instance.post(`posts`, {
            ...post
        })
        return response
    }

    static async deletePost(id) {
        const response = await instance.delete(`posts/${id}`)
        return response
    }
}