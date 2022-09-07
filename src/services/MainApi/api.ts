import axios from "axios";

const baseApi = axios.create ({
    // LINKAR API - da para colocar um localhost // 
    baseURL: "/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default baseApi;
