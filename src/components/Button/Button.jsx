import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonStyle = styled.button`
  padding: 8px 12px;
  border: 2px solid #000;
  border-radius: 4px;
  transition: 0.3s;
  text-align: center;
  background: #ffffff;
  border-color: #004680;
  cursor: pointer;
  ${({ isDisabled }) =>
    !isDisabled &&
    `
      &:hover {
          background: #004680;
          color: #FFF;
      }
    `}
  ${({ isDisabled }) =>
    isDisabled &&
    `
      background-color: #DEDEDE;
      cursor: not-allowed;
    `}
  ${({ isFullWidth }) =>
    isFullWidth &&
    `
      width: 100%;
    `}
`;

const Button = (props) => {
  const { isDisabled, onClick } = props;
  const extendedProps = {
    ...props,
    onClick: (e) => {
      !isDisabled && onClick(e);
    },
  };
  return <ButtonStyle {...extendedProps}>{props.children}</ButtonStyle>;
};

Button.propTypes = {
  isDisabled: PropTypes.bool,
};

Button.defaultProps = {
  isDisabled: false,
};

export default Button;
