import React from 'react';
import styled from 'styled-components';

interface LoadingBarProps {
  progress: number; // Progress as a percentage (0-100)
}

const LoadingBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  margin: 20px auto;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 35px;
  border: 4px solid #6c4e2f; /* Dark border for the loading bar */
  border-radius: 15px;
  background: #f4e3d2; /* Light background behind the bar */
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const ProgressBarFill = styled.div<{ progress: number }>`
  height: 100%;
  width: ${({ progress }) => progress}%;
  background: linear-gradient(90deg, #ffa726, #ff6f00); /* Orange gradient */
  transition: width 0.4s ease-in-out;
  border-radius: 10px 0 0 10px;
`;

const PercentageLabel = styled.span`
  margin-top: 10px;
  font-family: 'Rakkas', sans-serif; /* Using Rakkas font as specified */
  font-size: 20px;
  color: #ffffff; /* Earthy tone for text */
  font-weight: bold;
`;

const LoadingBar: React.FC<LoadingBarProps> = ({ progress }) => {
  return (
    <LoadingBarWrapper>
      <PercentageLabel>{progress}%</PercentageLabel>
      <ProgressBarContainer>
        <ProgressBarFill progress={progress} />
      </ProgressBarContainer>
    </LoadingBarWrapper>
  );
};

export default LoadingBar;
