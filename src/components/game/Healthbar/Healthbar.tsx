import React from 'react';
import styled from 'styled-components';

interface HealthBarProps {
  x: number;
  y: number;
  percentage: number;
  visible: boolean;
}

const HealthBarContainer = styled.div<{ x: number; y: number; visible: boolean }>`
  position: absolute;
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  width: 60px;
  height: 10px;
  border: 2px solid black;
  border-radius: 5px;
  background-color: red;
  overflow: hidden;
`;

const HealthBarFill = styled.div<{ percentage: number }>`
  width: ${({ percentage }) => percentage}%;
  height: 100%;
  background-color: green;
`;

const HealthBar: React.FC<HealthBarProps> = ({ x, y, percentage, visible }) => {
  return (
    <HealthBarContainer x={x} y={y} visible={visible}>
      <HealthBarFill percentage={percentage} />
    </HealthBarContainer>
  );
};

export default HealthBar;
