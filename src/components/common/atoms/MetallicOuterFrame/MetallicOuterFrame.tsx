import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  width?: string | "90%";
  height?: string | "90%";
  top?: string | "auto";
  bottom?: string | "auto";
  left?: string | "auto";
  right?: string | "auto";
  children?: ReactNode;
}

const MetallicOuterFrameWrapper = styled.div<{
    width?: string | "90%"; 
    height?: string | "90%"; 
    top?: string | "auto"; 
    bottom?: string | "auto"; 
    left?: string | "auto"; 
    right?: string | "auto";
  }>`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  border-radius: 8px; /* Rounded corners */
  background: linear-gradient(180deg, #524C43, #6B6458); /* Metallic gradient */
  border: 18px solid #8b7d64; /* Metallic outer border */
  box-shadow: 
    inset 0px 4px 6px rgba(0, 0, 0, 0.5), /* Inner shadow for depth */
    0px 6px 12px rgba(0, 0, 0, 0.3); /* Outer shadow for elevation */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Add white glows for the top border */
  &::before {
    content: '';
    position: absolute;
    top: -18px;
    left: -17.5px;
    right: -17.5px;
    bottom: -18px;
    border-radius: 8px; /* Match the frame's border radius */
    pointer-events: none;

    /* Create glows for the top border */
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.8) 0px,    /* Start bright white for the top border */
      rgba(255, 255, 255, 0.4) 2px,   /* Fade slightly at 2px */
      rgba(255, 255, 255, 0) 4px      /* Fully transparent at 4px */
    );

    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 4px, /* Mask for the top glow */
      rgba(0, 0, 0, 0) calc(100% - 19px)
    );

    -webkit-mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 4px, /* Mask for the top glow */
      rgba(0, 0, 0, 0) calc(100% - 19px)
    );

    z-index: 1; /* Ensure glow appears above the border */
  }

  /* Add white glows for the bottom border */
  &::after {
    content: '';
    position: absolute;
    top: -18px;
    left: 0px;
    right: 0px;
    bottom: -18px;
    border-radius: 5px; /* Match the frame's border radius */
    pointer-events: none;

    /* Create glows for the top border and the top of the bottom border */
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.8) calc(100% - 18.5px), /* Start bright white for the bottom border */
      rgba(255, 255, 255, 0.4) calc(100% - 16px), /* Fade slightly at 2px of bottom border */
      rgba(255, 255, 255, 0) calc(100% - 14px)    /* Fully transparent after bottom border glow */
    );

    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) calc(100% - 18.5px),
      rgba(0, 0, 0, 1) calc(100% - 12px), /* Mask for the bottom glow */
      rgba(0, 0, 0, 0) 100%
    );

    -webkit-mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) calc(100% - 18.5px),
      rgba(0, 0, 0, 1) calc(100% - 12px), /* Mask for the bottom glow */
      rgba(0, 0, 0, 0) 100%
    );

    z-index: 1; /* Ensure glow appears above the border */
  }
`;

const MetallicOuterFrame: React.FC<Props> = ({ width, height, top, bottom, left, right, children }) => {
  return (
    <MetallicOuterFrameWrapper 
      width={width}
      height={height}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
    >
      {children}
    </MetallicOuterFrameWrapper>
  );
};

export default MetallicOuterFrame;
