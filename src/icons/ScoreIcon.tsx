import React from 'react';
import Icon from './Icon';
import { ReactComponent as MyIcon } from './svg/score-icon.svg';

const ScoreIcon = () => (
  <Icon size={32} color="#FF0000">
    <MyIcon />
  </Icon>
);

export default ScoreIcon;
