import ChatWindow from './components/ChatWindow';
import UserInput from './components/UserInput';
import { ChatProvider } from './context/ChatContext';

function App() {
  return (
    <ChatProvider>
      <div className="app">
        <h1>E-commerce Chatbot</h1>
        <ChatWindow />
        <UserInput />
      </div>
    </ChatProvider>
  );
}

export default App;
