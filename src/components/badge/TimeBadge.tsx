import { BadgeIcon, BadgeText, GradientBadge } from './Badge';
import TimeIcon from '../../icons/TimeIcon';
import moment from 'moment';

export const TimeBadge = () => {
  return (
    <GradientBadge>
      <BadgeIcon>
        <TimeIcon />
      </BadgeIcon>
      <BadgeText>{moment().format('LT')}</BadgeText>
    </GradientBadge>
  );
};
