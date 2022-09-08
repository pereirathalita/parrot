import baseApi from "./api";

interface CadastroPayload {
    nome: string;
    email: string;
    senha: string;
    confirmarSenha: string;
    apartamento: number;
}
export function cadastroUsuario(payload: CadastroPayload) {
    return baseApi.post("/cadastro", payload);
};

export function listarUsuario() {
    return baseApi.post("/cadastro");
}

