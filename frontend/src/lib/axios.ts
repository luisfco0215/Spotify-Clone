import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api",
});

class ApiServices {
    axiosInstance = axios.create({
        baseURL: "http://localhost:5000/api/",
    });

    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    get = async () => {
        try {
            const response = await this.axiosInstance.get(this.endpoint);
            const data = await response.data;

            console.log(data);
        } catch (error) {
            console.log("Error fetching data", error)
        }
    }
}

export default ApiServices;