import axios from "axios";

export class TodoService {
    private static serverUrl: string = "https://jsonplaceholder.typicode.com";
    public static getAllTodos(): Promise<any> {
        return axios.get(`${this.serverUrl}/todos`)
    }
    public static getUserTodos(id: any): Promise<any> {
        return axios.get(`${this.serverUrl}/todos?userId=${id}`)
    }
}