import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FormLogin from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <FormLogin />
    </div>
  )
}

export default App
