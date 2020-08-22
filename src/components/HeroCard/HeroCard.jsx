import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const Card = styled.div`
  width: 100%;
  max-width: 200px;
  padding: 8px 0;
  border: 2px solid #000;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;
  ${({ isActive }) =>
    isActive &&
    `
      box-shadow: 0 4px 8px #222222;
      border: 2px solid #004680;
      color: #004680;
    `}
`;

export const ImageWrapper = styled.div`
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding-bottom: 100%;
`;

export const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 24px);
  max-width: 200px;
  border-radius: 50%;
`;

export const Title = styled.h3`
  font-size: 24px;
  text-align: center;
  margin: 16px 0;
  ${({ isActive }) =>
    isActive &&
    `
      color: #004680;
    `}
`;

const HeroCard = (props) => {
  const { name, image, isActive, onClick } = props;

  return (
    <Card isActive={isActive} onClick={onClick}>
      <ImageWrapper>
        <Image src={image} />
      </ImageWrapper>
      <Title isActive={isActive}>{name}</Title>
    </Card>
  );
};

HeroCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

HeroCard.defaultProps = {
  name: "",
  image: "",
  isActive: false,
};

export default HeroCard;
