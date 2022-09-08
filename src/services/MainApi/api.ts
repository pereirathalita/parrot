import axios from "axios";

const baseApi = axios.create ({
    // LINKAR API - da para colocar um localhost // 
    baseURL: "http://localhost:3033/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default baseApi;
