import { useState } from 'react';
import TelaLogin from './components/Login';
import TelaCadastro from './components/Cadastro';
import "./assets/styles/global.scss";
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <TelaCadastro /> */}
      {/* <TelaLogin /> */}
      <Header />
    </div>
  )
}

export default App;
