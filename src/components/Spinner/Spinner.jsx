import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "../Button/Button";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  flex: 7;
`;

const Right = styled.div`
  flex: 3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Text = styled.span`
  font-size: 18px;
`;

const NameText = styled(Text)`
  min-width: 120px;
`;

const ValueText = styled(Text)`
  min-width: 48px;
  text-align: center;
`;

const Spinner = (props) => {
  const {
    name,
    text,
    value,
    disabledIncrease,
    onIncrease,
    disabledDecrease,
    onDecrease,
  } = props;

  return (
    <Wrapper>
      <Left>
        <NameText>{text}</NameText>
      </Left>
      <Right>
        <Button
          isDisabled={disabledDecrease}
          onClick={() => {
            onDecrease(name);
          }}
        >
          -
        </Button>
        <ValueText>{value}</ValueText>
        <Button
          isDisabled={disabledIncrease}
          onClick={() => {
            onIncrease(name);
          }}
        >
          +
        </Button>
      </Right>
    </Wrapper>
  );
};

Spinner.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  disabledIncrease: PropTypes.bool,
  onIncrease: PropTypes.func.isRequired,
  disabledDecrease: PropTypes.bool,
  onDecrease: PropTypes.func.isRequired,
};

Spinner.defaultProps = {
  disabledIncrease: false,
  disabledDecrease: false,
};

export default Spinner;
