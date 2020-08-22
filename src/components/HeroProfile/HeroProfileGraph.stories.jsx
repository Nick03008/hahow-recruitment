import React from "react";

import HeroProfileGraph from "./HeroProfileGraph";

export default {
  title: "Components/HeroProfile/Graph",
  component: HeroProfileGraph,
};

const Template = (args) => <HeroProfileGraph {...args} />;

export const Default = Template.bind({});
Default.args = {
  profile: {
    str: 10,
    int: 5,
    agi: 2,
    luk: 8,
  },
};
