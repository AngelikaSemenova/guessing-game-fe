import React from 'react';
import Icon from './Icon';
import { ReactComponent as MyIcon } from './svg/speed-icon.svg';

const SpeedIcon = () => (
  <Icon size={32} color="#FF0000">
    <MyIcon />
  </Icon>
);

export default SpeedIcon;
