import { useChat } from '../context/ChatContext';

const ChatWindow = () => {
  const { messages } = useChat();

  return (
    <div className="chat-window">
      {messages.map((msg, index) => (
        <div key={index} className={msg.sender}>
          <strong>{msg.sender === 'user' ? 'You' : 'Bot'}:</strong> {msg.text}
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
