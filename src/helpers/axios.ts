import axios from "axios";

const httpClient = axios.create({
    baseURL: "http://localhost:9091/api/v1",
});

const httpAuthClient = axios.create({
    baseURL: "https://auth-dev.dehemi.com"
})

export { httpClient, httpAuthClient };