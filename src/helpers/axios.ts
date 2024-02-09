import axios from "axios";

const httpClient = axios.create({
    baseURL: import.meta.env.VITE_API_ENDPOINT,
});

const httpAuthClient = axios.create({
    baseURL: import.meta.env.VITE_AUTH_API_ENDPOIN
})

export { httpClient, httpAuthClient };