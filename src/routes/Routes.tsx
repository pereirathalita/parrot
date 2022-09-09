import { Routes, Route } from "react-router-dom";
import TelaCadastro from "../components/Cadastro";
import Feed from "../components/Feed";
import TelaLogin from "../components/Login";
import PerfilUsuario from "../components/Perfil";
import EditarCadastro from "../components/EditarUser";

export default function RoutesApp() {
  return (
    <div>
      <Routes>
        <Route path="/auth/login" element={<TelaLogin />} />
        <Route path="/cadastro" element={<TelaCadastro />} />
        <Route path="/editar" element={<EditarCadastro />} />
        <Route path="/perfil" element={<PerfilUsuario />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </div>
  );
}
