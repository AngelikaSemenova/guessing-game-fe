import React from 'react';
import Icon from './Icon';
import { ReactComponent as MyIcon } from './svg/chat-icon.svg';

const ChatIcon = () => (
  <Icon size={32} color="#FF0000">
    <MyIcon />
  </Icon>
);

export default ChatIcon;
