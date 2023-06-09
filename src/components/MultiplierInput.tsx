import { useState } from 'react';
import styled from 'styled-components';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #212433;
  border-radius: 4px;
  overflow: hidden;
  background-color: #191d26;
`;

const Label = styled.div`
  font-size: 10px;
  color: #fff;
  padding: 4px;
  text-align: center;
  margin-bottom: 4px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 100%;
  background-color: #212433;
  outline: none;
  cursor: pointer;
  font-size: 20px;
  color: #fff;
  border: 1px solid #212433;
  transition: border-color 0.2s ease-in-out;

  &:hover {
    border-color: #fff;
  }
`;

const UpButton = styled(Button)`
  border-radius: 4px;
  border-color: #404040;
  margin-left: 6px;
  margin-right: 6px;
  margin-bottom: 10px;
`;

const DownButton = styled(Button)`
  border-radius: 6px;
  border-color: #404040;
  margin-left: 6px;
  margin-right: 6px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  font-size: 16px;
  border: none;
  outline: none;
  text-align: center;
  color: #fff;
  background-color: black;
  border-radius: 6px;
  margin-bottom: 8px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    background-color: #000;
  }
`;

interface IProps {
  multiplierInput: number;
  setMultiplierInput: React.Dispatch<React.SetStateAction<number>>;
}

const NumericInput = ({ multiplierInput, setMultiplierInput }: IProps) => {
  const handleIncrement = () => {
    if (multiplierInput < 10) {
      setMultiplierInput((prevValue) => prevValue + 0.25);
    }
  };

  const handleDecrement = () => {
    setMultiplierInput((prevValue) =>
      prevValue - 0.25 >= 0 ? prevValue - 0.25 : 0
    );
  };

  return (
    <Container>
      <Label>Multiplier</Label>
      <InputContainer>
        <UpButton onClick={handleIncrement}>
          <FaChevronUp />
        </UpButton>
        <Input
          type="number"
          value={multiplierInput}
          onChange={(e) => {
            const value = Number(parseFloat(e.target.value).toFixed(2));
            if (value >= 0 && value <= 10) {
              setMultiplierInput(value || 0);
            } else {
            }
          }}
        />
        <DownButton onClick={handleDecrement}>
          <FaChevronDown />
        </DownButton>
      </InputContainer>
    </Container>
  );
};

export default NumericInput;
