import React from "react";
import styled from "styled-components";

const PinWrapper = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  background: radial-gradient(
    circle,
    #6B513A, /* Metallic brownish color */
    #402C2A
  );
  border: 1px solid black; /* Black border */
  border-radius: 50%;
  box-shadow: 
    inset 0px 1px 1px rgba(255, 255, 255, 0.6), /* Glow effect at the top */
    0px 1px 1px rgba(0, 0, 0, 0.5); /* Shadow effect at the bottom */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 990;

  &::before {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.4) 0%, /* Highlight at the center */
      rgba(255, 255, 255, 0) 80%
    );
    pointer-events: none;
  }
`;

const MetallicPin: React.FC = () => {
  return <PinWrapper />;
};

export default MetallicPin;
