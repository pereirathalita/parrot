import baseApi from "./api";

interface FeedPayload {
    mensagem: string;
}
export function feed(payload: FeedPayload){
    return baseApi.post("/feed", payload);
};

export function listarFeed() {
    return baseApi.post("/feed");
}
