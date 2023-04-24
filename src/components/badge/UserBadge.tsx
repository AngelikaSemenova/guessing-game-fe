import { BadgeIcon, BadgeText, GradientBadge } from './Badge';
import { FC } from 'react';
import UserIcon from '../../icons/UserIcon';

interface IProps {
  name: string;
}

export const UserBadge: FC<IProps> = ({ name }) => {
  return (
    <GradientBadge>
      <BadgeIcon>
        <UserIcon />
      </BadgeIcon>
      <BadgeText>{name}</BadgeText>
    </GradientBadge>
  );
};
