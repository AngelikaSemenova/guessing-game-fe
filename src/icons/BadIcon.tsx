import React from 'react';
import Icon from './Icon';
import { ReactComponent as MyIcon } from './svg/bad-icons.svg';

const BadIcon = () => (
  <Icon size={32} color="#FF0000">
    <MyIcon />
  </Icon>
);

export default BadIcon;
