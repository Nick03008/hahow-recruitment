import React from "react";
import styled from "styled-components";

const View = styled.div`
  width: 100%;
  max-width: 1000px;
  min-height: 280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dedede;
  border-radius: 4px;
`;

const Title = styled.h3`
  font-size: 24px;
  text-align: center;
  color: #222222;
`;

const TextView = (props) => {
  const { text } = props;
  return (
    <View>
      <Title>{text}</Title>
    </View>
  );
};

export default TextView;
