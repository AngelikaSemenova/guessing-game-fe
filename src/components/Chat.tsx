import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useWebSocket from '../hooks/useWebSocket';

export interface ChatMessage {
  text: string;
  sender: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ChatContainer = styled.div`
  width: 100%;
  height: 100px;
  overflow: auto;
  padding: 12px;
  min-height: 200px;
`;

const ChatMessageContainer = styled.div<{ isMe: boolean }>`
  display: flex;
  flex-direction: ${({ isMe }) => (isMe ? 'row-reverse' : 'row')};
  margin-bottom: 8px;
  align-items: center;
  gap: 6px;
`;

const ChatMessageBubble = styled.div<{ isMe: boolean }>`
  background-color: ${({ isMe }) => (isMe ? '#5e5858' : '#524747')};
  padding: 8px;
  border-radius: ${({ isMe }) => (isMe ? '8px 0 8px 8px' : '0 8px 8px 8px')};
  margin-${({ isMe }) => (isMe ? 'left' : 'right')}: 8px;
  max-width: 60%;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Input = styled.input`
  height: 36px;
  width: 200px;
  border-radius: 4px;
  border: none;
  padding: 0 12px;
  background-color: ${(props) => (props.disabled ? '#444856' : 'black')};
  color: white;
`;

const Button = styled.button`
  background: ${(props) =>
    props.disabled ? '#444856' : 'linear-gradient(to right, #d6217f, #ee4e4a)'};
  color: ${(props) => (props.disabled ? '#7E849A' : '#ffffff')};
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

interface IProps {
  login: boolean;
}

export const Chat = ({ login }: IProps) => {
  const { message, handleGuess } = useWebSocket(login);

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (message) {
      setMessages([...messages, message]);
    }
  }, [message]);

  const handleClick = () => {
    if (inputValue !== '') {
      handleGuess({ text: inputValue, sender: 'me' });
      setInputValue('');
    }
  };

  return (
    <Container>
      <ChatContainer>
        {messages.map((message, index) => (
          <ChatMessageContainer key={index} isMe={message.sender === 'me'}>
            <small>{message.sender}</small>
            <ChatMessageBubble isMe={message.sender === 'me'}>
              {message.text}
            </ChatMessageBubble>
          </ChatMessageContainer>
        ))}
      </ChatContainer>

      <InputContainer>
        <Input
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          disabled={!login}
        />
        <Button onClick={handleClick} disabled={!login}>
          Send
        </Button>
      </InputContainer>
    </Container>
  );
};
