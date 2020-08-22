import React from "react";

import HeroProfileContainer from "./index";

export default {
  title: "Container/HeroProfile",
  component: HeroProfileContainer,
};

const Template = (args) => <HeroProfileContainer {...args} />;
export const RealAPI = Template.bind({});
RealAPI.args = {
  profileId: 1
}
