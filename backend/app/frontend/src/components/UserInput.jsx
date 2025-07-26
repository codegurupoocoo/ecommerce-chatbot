import { useState } from 'react';
import { useChat } from '../context/ChatContext';

const UserInput = () => {
  const [input, setInput] = useState('');
  const { addMessage } = useChat();

  const handleSend = async () => {
    if (!input.trim()) return;

    addMessage({ sender: 'user', text: input });

    try {
      const res = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      addMessage({ sender: 'bot', text: data.reply });
    } catch (error) {
      addMessage({ sender: 'bot', text: 'Error contacting server.' });
    }

    setInput('');
  };

  return (
    <div className="user-input">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default UserInput;
