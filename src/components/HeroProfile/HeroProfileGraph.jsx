import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const FloatText = styled.span`
  font-size: 18px;
  position: absolute;
`;

const TopLeftText = styled(FloatText)`
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
`;

const TopRightText = styled(FloatText)`
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
`;

const BottomLeftText = styled(FloatText)`
  bottom: 0;
  left: 0;
  transform: translate(-50%, 50%);
`;

const BottomRightText = styled(FloatText)`
  bottom: 0;
  right: 0;
  transform: translate(50%, 50%);
`;

const drawSequence = ["str", "int", "luk", "agi"];
const directionMap = {
  str: { x: -1, y: -1 },
  int: { x: 1, y: -1 },
  agi: { x: -1, y: 1 },
  luk: { x: 1, y: 1 },
};

const SIZE = 200;
const CENTER_POS = SIZE / 2;
const BASE_DISTANCE = SIZE / 8;
const MAX_DISTANCE = SIZE / 2 - BASE_DISTANCE;
const HeroProfileGraph = (props) => {
  const { profile } = props;
  const max = Object.values(profile).reduce((sum, val) => sum + val, 0);
  const profileDrawPoints = drawSequence
    .map((key) => {
      const value = profile[key];
      const direction = directionMap[key];
      const rate = value / max;
      const x =
        CENTER_POS + (BASE_DISTANCE + rate * MAX_DISTANCE) * direction.x;
      const y =
        CENTER_POS + (BASE_DISTANCE + rate * MAX_DISTANCE) * direction.y;
      return `${x} ${y}`;
    })
    .join(",");
  return (
    <Wrapper>
      <svg
        width={SIZE}
        height={SIZE}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        fill-opacity="0.5"
      >
        <line
          x1="0"
          x2={SIZE}
          y1="0"
          y2={SIZE}
          stroke="black"
          stroke-width="3"
        />
        <line
          x1="0"
          x2={SIZE}
          y1={SIZE}
          y2="0"
          stroke="black"
          stroke-width="3"
        />
        <rect
          class="rectangle"
          width={SIZE}
          height={SIZE}
          fill="#DEDEDE"
          stroke="black"
          stroke-width="5"
        />
        <polyline points={profileDrawPoints} fill="orange" fill-opacity="0.5" />
      </svg>
      <TopLeftText>STR</TopLeftText>
      <TopRightText>INT</TopRightText>
      <BottomLeftText>AGI</BottomLeftText>
      <BottomRightText>luk</BottomRightText>
    </Wrapper>
  );
};

HeroProfileGraph.propTypes = {
  profile: PropTypes.shape({
    str: PropTypes.number,
    int: PropTypes.number,
    agi: PropTypes.number,
    luk: PropTypes.number,
  }),
};

HeroProfileGraph.defaultProps = {
  profile: {
    str: 0,
    int: 0,
    agi: 0,
    luk: 0,
  },
};

export default HeroProfileGraph;
