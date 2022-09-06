import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TelaCadastro from "./components/Cadastro";

export default function RoutesApp() {
      return (
      <div>
        <Router>
          <Routes>

            <Route path="/registro" element={<TelaCadastro />} />

          </Routes>
        </Router>
      </div>
    );
  }
  