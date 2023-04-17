import { useEffect, useState } from 'react';
import { useScoreGet } from './useScoreGet';
import { useCurrentRoundGet } from './useCurrentRoundGet';
import { useRankingGet } from './useRankingGet';
import { useScorePost } from './useScorePost';
import { CurrentRoundTableRow, RankingTableRow } from '../api';

export const useBootstrap = (
  pointInput: number,
  multiplierInput: number,
  login: boolean
) => {
  const { stateScore, getRequest } = useScoreGet();
  const { currentRoundData } = useCurrentRoundGet();
  const { rankingData } = useRankingGet();
  const [score, setScore] = useState<number>(0);
  const [roundData, setRoundData] = useState<CurrentRoundTableRow[]>();
  const [ranking, setRanking] = useState<RankingTableRow[]>();

  useEffect(() => {
    getRequest();
    setScore(stateScore as number);
  }, [stateScore, currentRoundData, rankingData]);

  const {
    stateVariable,
    updateStateScore,
    updateCurrentRoundData,
    updateRankingData,
    postRequest,
  } = useScorePost(pointInput, multiplierInput);

  useEffect(() => {
    setScore(updateStateScore as number);
    setRoundData(updateCurrentRoundData);
    setRanking(updateRankingData);
  }, [updateStateScore, updateCurrentRoundData, updateRankingData]);

  return {
    stateVariable,
    score: login ? score : 0,
    roundData,
    ranking: login
      ? ranking
      : [
          {
            name: '-',
            score: 0,
          },
        ],
    postRequest,
  };
};
