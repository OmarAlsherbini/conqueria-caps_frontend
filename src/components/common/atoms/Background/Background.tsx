import React, { ReactNode } from "react";
import styled from 'styled-components';

interface Props {
    children?: ReactNode
}

const BackgroundWrapper = styled.div`
  background: linear-gradient(180deg, #5E8B5E 0%, #A9C19C 100%);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Background: React.FC<Props> = ({ children, ...props }) => {
  return <BackgroundWrapper {...props}>{children}</BackgroundWrapper>;
};

export default Background;
