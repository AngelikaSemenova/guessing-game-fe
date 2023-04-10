import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryLabel,
  VictoryAxis,
} from 'victory';
import React, { useEffect, useState } from 'react';

interface IProps {
  score: number;
  slider: number;
}

export const StyledLineChart: React.FC<IProps> = ({ score, slider }) => {
  const [currentValue, setCurrentValue] = useState<number>(score);
  const [data, setData] = useState<{ x: number; y: number }[]>([
    { x: 0, y: 0 },
  ]);

  useEffect(() => {
    setCurrentValue(score);
    setData([
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 10, y: parseFloat(String(score)) },
    ]);
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
        <VictoryAxis
          style={{ axis: { stroke: 'transparent' } }}
          tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        />
        <VictoryAxis
          dependentAxis={true}
          style={{ axis: { stroke: 'transparent' } }}
          tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        />
        <VictoryLine
          style={{
            data: { stroke: '#bf256e' },
            parent: { border: '1px solid red' },
          }}
          animate={{
            duration: 1000,
            onLoad: { duration: slider * 2000 },
          }}
          data={data}
          interpolation="monotoneX"
          labelComponent={<VictoryLabel />}
          label="123"
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
