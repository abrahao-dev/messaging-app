import { useState, useEffect } from "react";
import axios from "axios";
import { Message } from "../../types/message";

const API_URL = "http://localhost:8080/messages";

export default function MessageBoard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  // Fetch messages from backend
  useEffect(() => {
    axios.get<Message[]>(API_URL)
      .then(response => setMessages(response.data))
      .catch(error => console.error("Error fetching messages:", error));
  }, []);

  // Send a new message
  const sendMessage = async () => {
    if (!newMessage.trim()) return;

    try {
      const response = await axios.post<Message>(API_URL, { content: newMessage });
      setMessages([...messages, response.data]); // Update UI
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Message Board</h2>

      <ul>
        {messages.map((msg, index) => (
          <li key={msg.id || index}>{msg.content}</li>
        ))}
      </ul>

      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
