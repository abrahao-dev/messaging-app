// src/components/MessageSender.tsx

import React, { useState } from 'react';
import axios from 'axios';

const MessageSender = () => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Sending the message to the backend
      const response = await axios.post('http://localhost:8080/messages', {
        content: message,
      });

      // Handle success
      console.log('Message sent:', response.data);
      setStatus('Message sent successfully!');
      setMessage('');  // Clear input field after sending
    } catch (error) {
      // Handle error
      console.error('Error sending message:', error);
      setStatus('Error sending message.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send Message</button>
      </form>
      <p>{status}</p>
    </div>
  );
};

export default MessageSender;
