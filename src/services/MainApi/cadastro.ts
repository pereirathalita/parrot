import baseApi from "./api";

interface CadastroPayload {
    name: string;
    email: string;
    apartment: number;
    password: string;
    // confirmarSenha: string;
}
export function cadastroUsuario(payload: CadastroPayload) {
    return baseApi.post("/user/", payload);
};

export function listarUsuario() {
    return baseApi.post("/user");
}

