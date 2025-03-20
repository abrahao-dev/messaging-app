import { useEffect, useState } from 'react'
import axios from 'axios'

const MessageList = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('/api/messages') // This should hit the correct API route
        setMessages(response.data)
      } catch (error) {
        console.error('Error fetching messages:', error)
      }
    }

    fetchMessages()
  }, [])

  return (
    <div className="message-list">
      {messages.map((msg, index) => (
        <div key={index} className="message">
          {msg.content}
        </div>
      ))}
    </div>
  )
}

export default MessageList
