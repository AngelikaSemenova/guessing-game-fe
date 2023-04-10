import React from 'react';
import Icon from './Icon';
import { ReactComponent as MyIcon } from './svg/time-icon.svg';

const TimeIcon = () => (
  <Icon size={32} color="#FF0000">
    <MyIcon />
  </Icon>
);

export default TimeIcon;
