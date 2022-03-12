import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
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
}