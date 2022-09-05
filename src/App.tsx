import { useState } from 'react';
import './App.css';
import TelaLogin from './components/Login';
import TelaCadastro from './components/Cadastro';
import "./assets/styles/global.scss";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TelaLogin />
    </div>
  )
}

export default App;
