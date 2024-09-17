import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Login from './components/Login'
import Register from './components/Register'
import ChatInterface from './components/ChatInterface'
import './styles.css'
import { User } from './types'

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null)

  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register setUser={setUser} />} />
            <Route
              path="/chat"
              element={user ? <ChatInterface user={user} /> : <Navigate to="/login" replace />}
            />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
