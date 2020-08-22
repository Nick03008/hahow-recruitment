import React from "react";
import styled, { css } from "styled-components";
import { Card, ImageWrapper, Title } from "../HeroCard/HeroCard";

const loadingPlaceholder = css`
  @keyframes placeholderAnimate {
    0% {
      background-position: -650px 0;
    }
    100% {
      background-position: 650px 0;
    }
  }
  animation-duration: 1.7s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: placeholderAnimate;
  background: #f6f7f8;
  background: linear-gradient(to right, #eee 2%, #ddd 18%, #eee 33%);
  background-size: 1300px;
`;

const LoadingImage = styled.div`
  ${loadingPlaceholder}
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 24px);
  max-width: 200px;
  border-radius: 50%;
  &:before {
    content: "";
    display: block;
    width: 100%;
    padding-bottom: 100%;
  }
`;

const LoadingTitle = styled(Title)`
  ${loadingPlaceholder}
  width: 50%;
  height: 32px;
  margin: 16px auto;
`;

const LoadingCard = () => {
  return (
    <Card>
      <ImageWrapper>
        <LoadingImage />
      </ImageWrapper>
      <LoadingTitle />
    </Card>
  );
};

export default LoadingCard;
