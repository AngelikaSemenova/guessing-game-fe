import { useState } from 'react';
import { GameApi, RankingTableRow } from '../api';

const gameApi = new GameApi();

export const useRankingGet = () => {
  const [stateVariable, setStateVariable] = useState<RankingTableRow[]>([
    { name: 'You', score: 0 },
    { name: 'CPU 1', score: 0 },
    { name: 'CPU 2', score: 0 },
    { name: 'CPU 3', score: 0 },
    { name: 'CPU 4', score: 0 },
  ]);

  const rankingDataGet = () => {
    gameApi
      .rankingGet()
      .then((response) => {
        setStateVariable(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return { rankingData: stateVariable, rankingDataGet };
};
