import { useState, useEffect } from 'react';
import { ChatMessage } from '../components/Chat';

const ws = new WebSocket('ws://localhost:8080');

const useWebSocket = (): {
  message: ChatMessage | undefined;
  handleGuess: (f: ChatMessage) => void;
} => {
  const [message, setMessage] = useState<ChatMessage | undefined>();

  useEffect(() => {
    ws.onmessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data.toString());
      setMessage(data);
    };

    return () => {
      ws.close();
    };
  }, []);

  const handleGuess = (f: ChatMessage) => {
    const ff = JSON.stringify(f);
    ws.send(ff);
  };

  return {
    message,
    handleGuess,
  };
};

export default useWebSocket;
