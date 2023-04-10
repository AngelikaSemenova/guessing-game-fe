import { useState } from 'react';
import { GameApi } from '../api';

const gameApi = new GameApi();
export const useScoreGet = () => {
  const [stateScore, setStateScore] = useState<number | string>();

  const getRequest = () => {
    gameApi
      .scoreGet()
      .then((response) => {
        setStateScore(response?.score || '');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return { stateScore, getRequest };
};
