import { useEffect, useState } from 'react';
import { BadgeIcon, BadgeText, GradientBadge } from './Badge';
import CupIcon from '../../icons/CupIcon';
import BadIcon from '../../icons/BadIcon';

interface IProps {
  isWinner: { w: boolean; d: string };
}

const Stats = ({ isWinner }: IProps) => {
  const [winCount, setWinCount] = useState(0);
  const [lossCount, setLossCount] = useState(0);
  const { w, d } = isWinner;

  useEffect(() => {
    const worker = new Worker('/gameStatsWorker.js');

    worker.addEventListener('message', ({ data }) => {
      setWinCount(data.wins);
      setLossCount(data.losses);
    });

    worker.postMessage({ w });
    return () => worker.terminate();
  }, [w, d]);

  return (
    <GradientBadge>
      <BadgeIcon>
        <CupIcon />
      </BadgeIcon>
      <BadgeText>{winCount || '-'}</BadgeText>
      <BadgeIcon>
        <BadIcon />
      </BadgeIcon>
      <BadgeText>{lossCount || '-'}</BadgeText>
    </GradientBadge>
  );
};

export default Stats;
