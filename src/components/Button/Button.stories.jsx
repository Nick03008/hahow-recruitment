import React from "react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled",
  isDisabled: true,
};
