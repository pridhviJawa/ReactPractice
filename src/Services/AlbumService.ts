import axios from "axios";

export class AlbumService {
    private static serverUrl: string = "https://jsonplaceholder.typicode.com";
    public static getAllAlbums(): Promise<any> {
        return axios.get(`${this.serverUrl}/albums`)
    }
    public static getUserAlbums(id: any): Promise<any> {
        return axios.get(`${this.serverUrl}/albums?userId=${id}`)
    }
}