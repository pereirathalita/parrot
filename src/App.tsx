import { useState } from 'react';
import './App.css';
import FormLogin from './components/Login';
import "./assets/styles/global.scss";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <FormLogin />
    </div>
  )
}

export default App;
