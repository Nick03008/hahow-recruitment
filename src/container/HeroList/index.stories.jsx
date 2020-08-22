import React from "react";

import HeroListContainer from "./index";

export default {
  title: "Container/HeroList",
  component: HeroListContainer,
};

const Template = (args) => <HeroListContainer {...args} />;

export const RealAPI = Template.bind({});