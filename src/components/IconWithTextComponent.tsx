import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
  text: string;
}

const IconWithText = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 6px;
`;

const Text = styled.span`
  font-size: 16px;
`;

export const IconWithTextComponent = ({ children, text }: Props) => {
  return (
    <IconWithText>
      {children}
      <Text>{text}</Text>
    </IconWithText>
  );
};
