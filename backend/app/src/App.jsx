// src/App.jsx

import React from 'react';
import ChatWindow from './components/ChatWindow';
import UserInput from './components/UserInput';
import { ChatProvider } from './context/ChatContext';

const App = () => {
  return (
    <ChatProvider>
      <div style={styles.container}>
        <h1>E-Commerce Support Chatbot 💬</h1>
        <ChatWindow />
        <UserInput />
      </div>
    </ChatProvider>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
  }
};

export default App;
