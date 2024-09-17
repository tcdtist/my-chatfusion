import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import { User } from '../../types'

interface HeaderProps {
  user: User
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  const navigate = useNavigate()
  const { theme, toggleTheme } = useTheme()

  const handleLogout = () => {
    // Implement logout logic here
    navigate('/login')
  }

  return (
    <header className="header">
      <div className="logo">ChatFusion</div>
      <div className="user-options">
        <button onClick={toggleTheme}>{theme === 'dark' ? '☀️' : '🌙'}</button>
        <span>{user.name}</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </header>
  )
}

export default Header
