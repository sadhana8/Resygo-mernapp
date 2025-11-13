import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Login from './Components/Login'
import Sidebar from './Components/Sidebar'
import AddMenu from './pages/AddMenu'
import ListMenu from './pages/ListMenu'
import AdminTable from './pages/AdminTable'

export const backendUrl = 'http://localhost:4000'

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || "")

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <ToastContainer />
      {
        token === "" ? (
          <Login setToken={setToken} />
        ) : (
          <div className="flex">
            <Sidebar setToken={setToken} />
            <div className="flex-1 p-6">
              <Routes>
                <Route path="/add" element={<AddMenu token={token} />} />
                <Route path="/list" element={<ListMenu token={token} />} />
                <Route path="/table" element={<AdminTable token={token} />} />
              </Routes>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default App
