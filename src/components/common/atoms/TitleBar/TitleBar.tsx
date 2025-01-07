import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
}

const TitleBarWrapper = styled.div`
  position: relative;
  background: linear-gradient(180deg, #656A4F 0%, #4A4933 100%);
  color: #FFFFFF;
  font-weight: bold;
  font-size: 2rem;
  padding: 5px 30px;
  border-radius: 18px;
  border: 12px solid #8B8B74;
  box-shadow: 
    inset 0px 10px 20px rgba(0, 0, 0, 0.6), 
    0 6px 8px rgba(0, 0, 0, 0.3);
  text-align: center;
  z-index: 10;
  top: 4%;

  /* Glow effects on top and bottom of the border */
  &::before {
    content: '';
    position: absolute;
    top: -12px; /* Align with the top of the border */
    left: -12px;
    right: -12px;
    bottom: -12px;
    border-radius: 18px; /* Match the border radius */
    pointer-events: none;

    /* Create glows for top border */
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.8) 0px, /* Start bright white for the top border */
      rgba(255, 255, 255, 0.4) 2px, /* Fade slightly at 2px */
      rgba(255, 255, 255, 0) 4px   /* Fully transparent at 4px */
      // transparent calc(100% - 16px), /* Neutral middle */
      // rgba(255, 255, 255, 0.8) calc(100% - 16px), /* Start bright white for the bottom border */
      // rgba(255, 255, 255, 0.4) calc(100% - 14px), /* Fade slightly at 2px of bottom border */
      // transparent calc(100% - 12px) /* Fully transparent after bottom border glow */
    );

    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 4px, /* Mask for the top glow */
      rgba(0, 0, 0, 0) calc(100% - 16px)
      // rgba(0, 0, 0, 1) calc(100% - 12px), /* Mask for the bottom glow */
      // rgba(0, 0, 0, 0) 100%
    );

    -webkit-mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 4px,
      rgba(0, 0, 0, 0) calc(100% - 16px)
      // rgba(0, 0, 0, 1) calc(100% - 12px),
      // rgba(0, 0, 0, 0) 100%
    );

    z-index: 1; /* Ensure glow appears above the border */
  }


  /* Add white glows for the bottom border */
  &::after {
    content: '';
    position: absolute;
    top: -12px; /* Align with the top of the border */
    left: -10px;
    right: -10px;
    bottom: -12px;
    border-radius: 50px; /* Match the border radius */
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

const TitleBar: React.FC<Props> = ({ title }) => {
  return <TitleBarWrapper>{title}</TitleBarWrapper>;
};

export default TitleBar;
