import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children?: ReactNode;
}

const FrameWrapper = styled.div`
  position: relative;
  width: 90%;
  height: 85%;
  border: 12px solid #8d8668;
  border-radius: 20px;
  background: 
    radial-gradient(circle at 50% 120%, rgba(229, 239, 181, 1) 10%, rgba(56, 64, 45, 0) 50%), 
    linear-gradient(180deg, #4E562F 0%, #8d9a6a 100%);
  box-shadow: 
    inset 0px 10px 20px rgba(0, 0, 0, 0.6), 
    0px 8px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  /* Add white glows for the top border */
  &::before {
    content: '';
    position: absolute;
    top: -12px;
    left: -12px;
    right: -12px;
    bottom: -12px;
    border-radius: 20px; /* Match the frame's border radius */
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
      rgba(0, 0, 0, 0) calc(100% - 13px)
    );

    -webkit-mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 4px, /* Mask for the top glow */
      rgba(0, 0, 0, 0) calc(100% - 13px)
    );

    z-index: 1; /* Ensure glow appears above the border */
  }

  /* Add white glows for the bottom border */
  &::after {
    content: '';
    position: absolute;
    top: -12px;
    left: -12px;
    right: -12px;
    bottom: -12px;
    border-radius: 50px; /* Match the frame's border radius */
    pointer-events: none;

    /* Create glows for the top border and the top of the bottom border */
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.8) calc(100% - 13px), /* Start bright white for the bottom border */
      rgba(255, 255, 255, 0.4) calc(100% - 10px), /* Fade slightly at 2px of bottom border */
      rgba(255, 255, 255, 0) calc(100% - 8px)    /* Fully transparent after bottom border glow */
    );

    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) calc(100% - 13px),
      rgba(0, 0, 0, 1) calc(100% - 8px), /* Mask for the bottom glow */
      rgba(0, 0, 0, 0) 100%
    );

    -webkit-mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) calc(100% - 13px),
      rgba(0, 0, 0, 1) calc(100% - 8px), /* Mask for the bottom glow */
      rgba(0, 0, 0, 0) 100%
    );

    z-index: 1; /* Ensure glow appears above the border */
  }
`;

const WindowFrame: React.FC<Props> = ({ children }) => {
  return <FrameWrapper>{children}</FrameWrapper>;
};

export default WindowFrame;
