import React from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
}

const MetallicInnerFrameWrapper = styled.div`
  position: absolute;
  top: 8px; /* Matches the border thickness of the outer frame */
  left: 8px;
  right: 8px;
  bottom: 8px;
  border-radius: 10px; /* Matches the outer frame's border radius */
  background: linear-gradient(180deg, #8b7d64, #8b7d64); /* Inner metallic depth */
  box-shadow: 
    inset 0px 0px 4px rgba(0, 0, 0, 0.7), /* Inner shadow for depth */
    inset 0px 6px 8px rgba(0, 0, 0, 0.6); /* Highlight at the top edge for 3D effect */;
  pointer-events: none; /* Ensure this doesn't interfere with interactions */
`;

const MetallicInnerFrame: React.FC<Props> = ({ children }) => {
  return <MetallicInnerFrameWrapper>{children}</MetallicInnerFrameWrapper>;
};

export default MetallicInnerFrame;
