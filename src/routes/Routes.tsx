import { Routes, Route } from "react-router-dom";
import TelaCadastro from "../components/Cadastro";
import Feed from "../components/Feed";
import TelaLogin from "../components/Login";
import PerfilUsuario from "../components/Perfil";

export default function RoutesApp() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<TelaLogin />} />
        <Route path="/cadastro" element={<TelaCadastro />} />
        <Route path="/perfil" element={<PerfilUsuario />} />
        <Route path="/feed/:nome" element={<Feed />} />
      </Routes>
    </div>
  );
}
