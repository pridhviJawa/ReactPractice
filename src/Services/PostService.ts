import axios from "axios";

export class PostService {
    private static serverUrl: string = "https://jsonplaceholder.typicode.com";
    public static getAllPosts(): Promise<any> {
        return axios.get(`${this.serverUrl}/posts`)
    }
    public static getUserPosts(id: any): Promise<any> {
        return axios.get(`${this.serverUrl}/posts?userId=${id}`)
    }
}