import { BadgeIcon, BadgeText, GradientBadge } from './Badge';
import TimeIcon from '../../icons/TimeIcon';
import moment from 'moment';
import { useEffect, useState } from 'react';

export const TimeBadge = () => {
  const [time, setTime] = useState(moment().format('LT'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(moment().format('LT'));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <GradientBadge>
      <BadgeIcon>
        <TimeIcon />
      </BadgeIcon>
      <BadgeText>{time}</BadgeText>
    </GradientBadge>
  );
};
