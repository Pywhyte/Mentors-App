import axios from "axios"


export default class PostService {
    static async getAll(limit = 10, page = 1) {

        const response = await axios.get("")
        return response
    }

    static async getByID(id) {

        const response = await axios.get("")        
        return response
    }
    static async getCommentsByPostId(id) {

        const response = await axios.get(``)        
        return response
    }
}