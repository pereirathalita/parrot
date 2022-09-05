// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import TelaLogin from './components/Login';
import TelaCadastro from './components/Cadastro';
import "./assets/styles/global.scss";
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0)

    return (
      <div>
        {/* <TelaCadastro /> */}
        <TelaLogin />
      </div>
      // <Router>
      //   <Routes>
      //     {/* <Route path="/" element={<Feed />} />
      //     <Route path="/register" element={<Cadastro />} />
      //     <Route path="/login" element={<Login />} />
      //     <Route path="/profile" element={<Profile />} /> */}
      //   </Routes>
      // </Router>
    );
}

export default App;
