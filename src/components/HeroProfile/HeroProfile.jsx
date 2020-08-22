import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import Spinner, { Wrapper as SpinnerWrapper } from "../Spinner/Spinner";
import LoadingProfile from "./LoadingProfile";
import TextView from "../TextView/TextView";
import { REQUEST_STATE } from "../../common/constants";

export const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  max-width: 1000px;
  padding: 48px 24px;
  margin: 0 auto;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  border: 2px solid #000;
  border-radius: 4px;
  ${SpinnerWrapper} {
    margin-bottom: 12px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormArea = styled.div`
  width: 100%;
  flex: 2;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const DummyArea = styled.div`
  flex: 2;
`;

export const ActionArea = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const Text = styled.p`
  font-size: 18px;
`;

const HeroProfile = (props) => {
  const {
    state,
    spinnerDatas,
    remainPoints,
    onSubmit,
    isDisabledSubmit,
  } = props;

  if (state === REQUEST_STATE.LOADING) {
    return <LoadingProfile />;
  }

  if (state === REQUEST_STATE.FAILURE) {
    return <TextView text="發生了一點錯誤，請稍微重整頁面再試試看" />;
  }

  return (
    <Wrapper>
      <FormArea>
        {spinnerDatas.map((row) => {
          return <Spinner key={row.name} {...row} />;
        })}
      </FormArea>
      <DummyArea />
      <ActionArea>
        <Text>剩餘點數：{remainPoints}</Text>
        <Button isFullWidth isDisabled={isDisabledSubmit} onClick={onSubmit}>
          儲存
        </Button>
      </ActionArea>
    </Wrapper>
  );
};

HeroProfile.propTypes = {
  state: PropTypes.oneOf(Object.values(REQUEST_STATE)),
  spinnerDatas: PropTypes.arrayOf(Spinner),
  remainPoints: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isDisabledSubmit: PropTypes.bool,
};

HeroProfile.defaultProps = {
  state: REQUEST_STATE.LOADING,
  spinnerDatas: [],
  isDisabledSubmit: false,
};

export default HeroProfile;
