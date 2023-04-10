import React from 'react';
import Icon from './Icon';
import { ReactComponent as MyIcon } from './svg/cup-icon.svg';

const CupIcon = () => (
  <Icon size={32} color="#FF0000">
    <MyIcon />
  </Icon>
);

export default CupIcon;
