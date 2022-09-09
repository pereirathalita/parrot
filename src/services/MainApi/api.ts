import axios from "axios";

const baseApi = axios.create ({
    baseURL: "http://localhost:3033/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default baseApi;
