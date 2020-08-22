import React from "react";
import Spinner from "./Spinner";

export default {
  title: "Components/Spinner",
  component: Spinner
};

const Template = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "str",
  text: "STR",
  value: 10,
};

export const DisabledIncrease = Template.bind({});
DisabledIncrease.args = {
  name: "str",
  text: "STR",
  value: 10,
  disabledIncrease: true
};