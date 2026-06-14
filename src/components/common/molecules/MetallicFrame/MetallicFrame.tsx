import React, { ReactNode } from "react";
import styled from "styled-components";
import MetallicPin from '../../atoms/MetallicPin/MetallicPin';
import MetallicOuterFrame from '../../atoms/MetallicOuterFrame/MetallicOuterFrame';
import MetallicInnerFrame from '../../atoms/MetallicInnerFrame/MetallicInnerFrame';

interface MetallicFrameProps {
  width?: string | "90%";
  height?: string | "90%";
  top?: string | "auto";
  bottom?: string | "auto";
  left?: string | "auto";
  right?: string | "auto";
  children?: ReactNode;
}

const PinContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  /* Pin Positions */
  .top-left {
    position: absolute;
    top: -12px;
    left: -12px;
  }

  .top-right {
    position: absolute;
    top: -12px;
    right: -12px;
  }

  .bottom-left {
    position: absolute;
    bottom: -12px;
    left: -12px;
  }

  .bottom-right {
    position: absolute;
    bottom: -12px;
    right: -12px;
  }
`;

const MetallicFrame: React.FC<MetallicFrameProps> = ({ width, height, top, bottom, left, right, children }) => {
  return (
    <MetallicOuterFrame 
      width={width}
      height={height}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
    >
      <PinContainer>
        <div className="top-left">
          <MetallicPin />
        </div>
        <div className="top-right">
          <MetallicPin />
        </div>
        <div className="bottom-left">
          <MetallicPin />
        </div>
        <div className="bottom-right">
          <MetallicPin />
        </div>
      </PinContainer>
      <MetallicInnerFrame>
        {children}
      </MetallicInnerFrame>
    </MetallicOuterFrame>
  );
};

export default MetallicFrame;
