import styled from 'styled-components';

export const GradientBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 62px;
  background: linear-gradient(to right, #191d26, #212433);
  border-radius: 6px;
  border: 1px solid #242a38;
`;

export const BadgeText = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  overflow: hidden;
  width: 80px;
`;

export const BadgeIcon = styled.div`
  margin-left: 6px;
  margin-right: 12px;
`;
