// src/components/UserInput.jsx

import React, { useState } from 'react';
import { useChat } from '../context/ChatContext';
import axios from 'axios';

const UserInput = () => {
  const [input, setInput] = useState('');
  const { addMessage } = useChat();

  const handleSend = async () => {
    if (!input.trim()) return;

    addMessage({ sender: 'user', text: input });

    try {
      const res = await axios.post('http://localhost:5000/chat', { message: input });
      addMessage({ sender: 'bot', text: res.data.reply });
    } catch (error) {
      addMessage({ sender: 'bot', text: 'Error connecting to chatbot.' });
    }

    setInput('');
  };

  return (
    <div style={styles.inputContainer}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        style={styles.input}
      />
      <button onClick={handleSend} style={styles.button}>Send</button>
    </div>
  );
};

const styles = {
  inputContainer: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px'
  },
  input: {
    flex: 1,
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc'
  },
  button: {
    padding: '10px 16px',
    borderRadius: '6px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer'
  }
};

export default UserInput;
