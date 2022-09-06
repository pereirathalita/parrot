import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cadastrar from "./view/Cadastrar";

import "./assets/styles/global.scss";
import TelaCadastro from "./components/Cadastro";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Feed />} /> */}
          <Route path="/registro" element={<TelaCadastro />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
