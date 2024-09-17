import EmojiPicker from 'emoji-picker-react'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { Message, User } from '../../types'

interface MessageAreaProps {
  user: User
}

const MessageArea: React.FC<MessageAreaProps> = ({ user }) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: inputMessage,
        sender: user,
        timestamp: new Date(),
      }
      setMessages([...messages, newMessage])
      setInputMessage('')
    }
  }

  const handleEmojiClick = (event: any, emojiObject: any) => {
    setInputMessage(inputMessage + emojiObject.emoji)
    setShowEmojiPicker(false)
  }

  return (
    <div className="message-area">
      <div className="messages">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              className={`message ${message.sender.id === user.id ? 'sent' : 'received'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <span className="sender">{message.sender.name}</span>
              <p>{message.text}</p>
              <span className="timestamp">{message.timestamp.toLocaleTimeString()}</span>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSendMessage} className="message-input">
        <button
          type="button"
          className="emoji-button"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        >
          😊
        </button>
        {showEmojiPicker && (
          <div className="emoji-picker-container">
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default MessageArea
