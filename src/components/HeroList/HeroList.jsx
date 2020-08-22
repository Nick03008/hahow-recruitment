import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import HeroCard, { Card } from "../HeroCard/HeroCard";
import LoadingCard from "./LoadingCard";
import TextView from "./TextView";

const List = styled.div`
  width: 100%;
  box-sizing: border-box;
  max-width: 1000px;
  padding: 48px 24px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  border: 2px solid #000;
  border-radius: 4px;
  @media screen and (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    ${Card} {
      width: 50%;
      margin: 12px 24px;
    }
  }
  @media screen and (max-width: 576px) {
    ${Card} {
      width: 100%;
    }
  }
`;

export const STATE = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
};

const HeroList = (props) => {
  const { state, cards } = props;

  if (state === STATE.LOADING) {
    return (
      <List>
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </List>
    );
  }

  if (state === STATE.FAILURE) {
    return <TextView text="出了一點狀況，目前無法取得 HeroCard" />;
  }

  if (state === STATE.SUCCESS && cards.length === 0) {
    return <TextView text="目前無任何 HeroCard" />;
  }

  return (
    <List>
      {cards.map((card, index) => (
        <HeroCard key={card.id} {...card} />
      ))}
    </List>
  );
};

HeroList.propTypes = {
  state: PropTypes.oneOf(Object.values(STATE)),
  cards: PropTypes.arrayOf(HeroCard.propTypes),
};

HeroList.defaultProps = {
  state: STATE.LOADING,
  cards: [],
};

export default HeroList;
