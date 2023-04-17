import { useState, useEffect } from 'react';
import { ChatMessage } from '../components/Chat';

const useWebSocket = (
  login: boolean
): {
  message: ChatMessage | undefined;
  handleGuess: (f: ChatMessage) => void;
} => {
  const [message, setMessage] = useState<ChatMessage | undefined>();

  useEffect(() => {
    if (login) {
      ws.onmessage = (event: MessageEvent) => {
        const data = JSON.parse(event.data.toString());
        setMessage(data);
      };

      return () => {
        ws.close();
      };
    }
  }, [login]);

  if (!login)
    return {
      message: undefined,
      handleGuess: () => {
        console.log('ws closed');
      },
    };

  const ws = new WebSocket(
    process.env.REACT_APP_BASE_PATH || 'ws://localhost:3000/ws'
  );

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
