import React, { useState } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import styled from 'styled-components';

interface Props {
  onChange: (value: number) => void;
}

interface StyledSliderProps {
  foreground: string;
  thumb: string;
}

const StyledSlider = styled(Slider)<StyledSliderProps>`
  margin: 20px;

  .rangeslider-horizontal {
    height: 10px;
    border-radius: 10px;
    margin: 20px;
    position: relative;
  }

  .rangeslider__fill {
    background-color: ${(props) => props.foreground};
    border-radius: 10px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }

  .rangeslider__handle {
    background-color: ${(props) => props.thumb};
    border-radius: 50%;
    top: 50%;
    cursor: pointer;
  }

  .rangeslider__handle:focus {
    box-shadow: none;
  }

  .rangeslider__label-item {
    padding-top: 12px;
  }
`;

const ControlledSlider: React.FC<Props> = ({ onChange }) => {
  const [localValue, setLocalValue] = useState<number>(1);
  const labels = { 0: '1x', 1: '2x', 2: '3x', 3: '4x', 4: '5x' };

  const handleValueChange = (value: number) => {
    setLocalValue(value);
    onChange(value);
  };

  return (
    <StyledSlider
      value={localValue}
      min={0}
      max={4}
      step={1}
      labels={labels}
      onChange={handleValueChange}
      foreground="#bf256e"
      thumb="#fff"
      orientation="horizontal"
    />
  );
};

export default ControlledSlider;
