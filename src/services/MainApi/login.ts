import baseApi from "./api";

interface LoginPayload {
    email: string;
    password: string;
}
export function login(payload: LoginPayload){
    return baseApi.post("/auth/login", payload);
}
export function authRoute(token: string){
    return baseApi.get("/user/info"), {
        headers: {
            'Authorization': `auth ${token}`,
        },
    };
}
