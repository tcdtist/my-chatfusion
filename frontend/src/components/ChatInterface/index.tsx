import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import MessageArea from '../MessageArea'
import { User } from '../../types'

interface ChatInterfaceProps {
  user: User
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ user }) => {
  return (
    <div className="chat-interface">
      <Header user={user} />
      <div className="chat-content">
        <Sidebar />
        <MessageArea user={user} />
      </div>
    </div>
  )
}

export default ChatInterface
