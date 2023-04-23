import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

//Pages
import Bio from './pages/Bio/Bio';


function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/login" element={<Login />} />
       </Routes>
    </>
  )
}

export default App
