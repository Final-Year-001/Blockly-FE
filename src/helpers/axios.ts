import axios from "axios";

const httpClient = axios.create({
    baseURL: "https://api-blockly-research-dev.dehemi.com/api/v1",
});


export { httpClient };