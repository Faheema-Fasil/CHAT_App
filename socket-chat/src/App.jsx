
import React, {  } from 'react'
import { Route, Routes,  } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Chat from './pages/chat'


function App() {

  return (
    <>
    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
    </>
  )
}

export default App
