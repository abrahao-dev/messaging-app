'use client'

import { useState } from 'react'
import axios from 'axios'

const MessageInput = () => {
  const [message, setMessage] = useState('')

  const handleSendMessage = async () => {
    try {
      await axios.post('/api/messages', { content: message })
      setMessage('')
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  return (
    <div className="message-input-container">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="message-input"
      />
      <button onClick={handleSendMessage} className="send-button">Send</button>
    </div>
  )
}

export default MessageInput
