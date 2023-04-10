import { BadgeIcon, BadgeText, GradientBadge } from './Badge';
import CupIcon from '../../icons/CupIcon';
import { FC } from 'react';

interface IProps {
  name: string;
}

export const UserBadge: FC<IProps> = ({ name }) => {
  return (
    <GradientBadge>
      <BadgeIcon>
        <CupIcon />
      </BadgeIcon>
      <BadgeText>{name}</BadgeText>
    </GradientBadge>
  );
};
