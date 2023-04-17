import { useState } from 'react';
import { CurrentRoundTableRow, GameApi } from '../api';

const gameApi = new GameApi();

export const useCurrentRoundGet = () => {
  const [stateVariable, setStateVariable] = useState<CurrentRoundTableRow[]>([
    { name: 'You', point: 0, multiplier: 0 },
    { name: 'CPU 1', point: 0, multiplier: 0 },
    { name: 'CPU 2', point: 0, multiplier: 0 },
    { name: 'CPU 3', point: 0, multiplier: 0 },
    { name: 'CPU 4', point: 0, multiplier: 0 },
  ]);

  const currentRoundGet = () => {
    gameApi
      .apiGuessTheNumberCurrentRoundGet()
      .then((response) => {
        setStateVariable(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return { currentRoundData: stateVariable, currentRoundGet };
};
