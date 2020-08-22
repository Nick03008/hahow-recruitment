import React from "react";
import styled from "styled-components";
import { Card, ImageWrapper, Title } from "../HeroCard/HeroCard";
import { loadingPlaceholder } from "../../common/styles";

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
