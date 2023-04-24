import React from 'react';
import Icon from './Icon';
import { ReactComponent as MyIcon } from './svg/user-icon.svg';

const UserIcon = () => (
  <Icon size={32} color="#FF0000">
    <MyIcon />
  </Icon>
);

export default UserIcon;
