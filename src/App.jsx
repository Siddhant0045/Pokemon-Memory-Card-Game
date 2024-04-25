import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewApp from './NewApp.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/home" element={<NewApp />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
