import React from 'react';
import Icon from './Icon';
import { ReactComponent as MyIcon } from './svg/ranking-icon.svg';

const RankingIcon = () => (
  <Icon size={32} color="#FF0000">
    <MyIcon />
  </Icon>
);

export default RankingIcon;
