import { BadgeIcon, BadgeText, GradientBadge } from './Badge';
import ScoreIcon from '../../icons/ScoreIcon';
import { FC } from 'react';

interface IProps {
  score: number;
}
export const ScoreBadge: FC<IProps> = ({ score }) => {
  return (
    <GradientBadge>
      <BadgeIcon>
        <ScoreIcon />
      </BadgeIcon>
      <BadgeText>{score || '-'}</BadgeText>
    </GradientBadge>
  );
};
