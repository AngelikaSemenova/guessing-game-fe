import { useState } from 'react';
import { GameApi, ScoreResponse } from '../api';
import { useScoreGet } from './useScoreGet';
import { useCurrentRoundGet } from './useCurrentRoundGet';
import { useRankingGet } from './useRankingGet';

const gameApi = new GameApi();
export const useScorePost = (point: number, multiplier: number) => {
  const [stateVariable, setStateVariable] = useState<ScoreResponse>();
  const { stateScore, getRequest } = useScoreGet();
  const { currentRoundData, currentRoundGet } = useCurrentRoundGet();
  const { rankingData, rankingDataGet } = useRankingGet();

  const postRequest = () => {
    gameApi
      .scorePost({ scoreRequestBody: { point, multiplier } })
      .then((response) => {
        setStateVariable(response);
        getRequest();
        currentRoundGet();
        rankingDataGet();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return {
    stateVariable,
    updateStateScore: stateScore,
    updateCurrentRoundData: currentRoundData,
    updateRankingData: rankingData,
    postRequest,
  };
};
