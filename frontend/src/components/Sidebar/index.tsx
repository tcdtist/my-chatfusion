import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Sidebar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'users' | 'rooms'>('users')
  const [users] = useState(['John Doe', 'Jane Smith', 'Bob Johnson'])
  const [rooms] = useState(['General', 'Tech Talk', 'Random'])

  return (
    <div className="sidebar">
      <div className="tabs">
        <button
          className={activeTab === 'users' ? 'active' : ''}
          onClick={() => setActiveTab('users')}
        >
          Users
        </button>
        <button
          className={activeTab === 'rooms' ? 'active' : ''}
          onClick={() => setActiveTab('rooms')}
        >
          Rooms
        </button>
      </div>
      <motion.div
        className="list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === 'users'
          ? users.map((user, index) => (
              <div key={index} className="list-item">
                {user}
              </div>
            ))
          : rooms.map((room, index) => (
              <div key={index} className="list-item">
                {room}
              </div>
            ))}
      </motion.div>
    </div>
  )
}

export default Sidebar
