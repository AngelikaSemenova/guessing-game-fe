import styled from 'styled-components';

interface ButtonProps {
  isActive: boolean;
}

const Button = styled.button<ButtonProps>`
  background: ${({ isActive }) =>
    isActive ? '#7e849a' : 'linear-gradient(to right, #d6217f, #ee4e4a)'};
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  min-height: 48px;
`;

interface IProps {
  onClick?: () => void;
  isActive: boolean;
}

export const StartedBtn = ({
  onClick = undefined,
  isActive = false,
}: IProps) => {
  return (
    <Button isActive={isActive} onClick={onClick}>
      {isActive ? 'Started' : 'Start'}
    </Button>
  );
};
