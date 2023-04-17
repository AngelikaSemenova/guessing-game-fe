import { VictoryChart, VictoryTheme, VictoryLabel, VictoryAxis } from 'victory';
import { VictoryLine } from 'victory-line';
import React, { useEffect, useState } from 'react';

interface IProps {
  score: number;
  slider: number;
}

export const StyledLineChart: React.FC<IProps> = ({ score, slider }) => {
  const [currentValue, setCurrentValue] = useState<number>(score);
  const [data, setData] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    setCurrentValue(score);
    const nullScore = parseFloat(String(score)) === 0;
    setData(
      nullScore
        ? []
        : [
            { x: 0, y: 0.5 },
            { x: 1, y: 0.5 },
            { x: 10, y: parseFloat(String(score)) },
          ]
    );
  }, [score]);

  return (
    <div
      key={score}
      style={{ width: '100%', height: '70%', position: 'relative' }}
    >
      <VictoryChart
        domainPadding={{ x: 20, y: 10 }}
        theme={VictoryTheme.grayscale}
      >
        <VictoryAxis tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
        <VictoryAxis
          dependentAxis={true}
          tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        />
        <VictoryLine
          style={{
            data: {
              stroke: '#bf256e',
              strokeWidth: 8,
              strokeLinecap: 'round',
            },
            parent: { border: '1px solid red' },
          }}
          animate={{
            duration: slider * 1000,
          }}
          data={data}
          interpolation="monotoneX"
        />
      </VictoryChart>
      <VictoryLabel
        textAnchor="middle"
        style={{
          fontSize: 50,
          position: 'absolute',
          top: '15%',
          width: '100%',
          textAlign: 'center',
        }}
        x={200}
        y={150}
        text={`${currentValue}x`}
      />
    </div>
  );
};
