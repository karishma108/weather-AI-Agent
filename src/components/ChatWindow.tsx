import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import styles from './ChatWindow.module.css';
import type { ChatMessage } from '../services/api';

interface ChatWindowProps {
  messages: ChatMessage[];
  isLoading: boolean;
  onSendMessage: (message: string) => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, isLoading, onSendMessage }) => {
  return (
    <div className={styles.chatWindow}>
      <MessageList messages={messages} isLoading={isLoading} />
      <MessageInput 
        onSendMessage={onSendMessage}
        placeholder="Ask me about the weather in any city..."
        disabled={isLoading}
      />
    </div>
  );
};

export default ChatWindow;