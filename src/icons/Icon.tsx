import React from 'react';
import styled from 'styled-components';

type SvgIconProps = {
  size: number;
  color: string;
};

const SvgIcon = styled.svg<SvgIconProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  fill: ${({ color }) => color};
`;

type IconProps = SvgIconProps & {
  children: React.ReactNode;
};

const Icon = ({ size = 24, color = 'currentColor', children }: IconProps) => (
  <SvgIcon size={size} color={color} viewBox={`0 0 ${size} ${size}`}>
    {children}
  </SvgIcon>
);

export default Icon;
