import React from "react";
import styled from "styled-components";
import { loadingPlaceholder } from "../../common/styles";
import { Wrapper, DummyArea, FormArea, ActionArea } from "./HeroProfile";

const LoadingSpinner = styled.div`
  ${loadingPlaceholder}
  width: 100%;
  height: 36px;
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const LoadingTitle = styled.div`
  ${loadingPlaceholder}
  width: 80%;
  height: 32px;
  margin: 12px 0;
`;

const LoadingButton = styled.div`
  ${loadingPlaceholder}
  width: 100%;
  height: 40px;
`;

const LoadingProfile = () => {
  return (
    <Wrapper>
      <FormArea>
        <LoadingSpinner />
        <LoadingSpinner />
        <LoadingSpinner />
        <LoadingSpinner />
      </FormArea>
      <DummyArea />
      <ActionArea>
        <LoadingTitle />
        <LoadingButton />
      </ActionArea>
    </Wrapper>
  );
};

export default LoadingProfile;
