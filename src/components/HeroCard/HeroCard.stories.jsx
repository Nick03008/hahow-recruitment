import React from "react";
import HeroCard from "./HeroCard";

export default {
  title: "Components/HeroCard",
  component: HeroCard
};

const Template = (args) => <HeroCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Title",
  image: "https://fakeimg.pl/200x200",
};

export const Actived = Template.bind({});
Actived.args = {
  name: "Actived",
  image: "https://fakeimg.pl/200x200",
  isActive: true,
};
