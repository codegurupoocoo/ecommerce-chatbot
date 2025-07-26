// src/components/ChatWindow.jsx

import React from 'react';
import { useChat } from '../context/ChatContext';

const ChatWindow = () => {
  const { messages } = useChat();

  return (
    <div style={styles.container}>
      {messages.map((msg, index) => (
        <div key={index} style={msg.sender === 'user' ? styles.userMsg : styles.botMsg}>
          {msg.text}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: '10px',
    height: '400px',
    overflowY: 'scroll',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '8px',
    marginBottom: '10px'
  },
  userMsg: {
    textAlign: 'right',
    margin: '5px',
    padding: '10px',
    backgroundColor: '#DCF8C6',
    borderRadius: '8px'
  },
  botMsg: {
    textAlign: 'left',
    margin: '5px',
    padding: '10px',
    backgroundColor: '#E0E0E0',
    borderRadius: '8px'
  }
};

export default ChatWindow;
