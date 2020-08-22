import React from "react";

import HeroList, { STATE } from "./HeroList";
import {
  Default as DefaultCard,
  Actived as ActivedCard
} from "../HeroCard/HeroCard.stories";

export default {
  title: "Components/HeroList",
  component: HeroList,
};

const Template = (args) => <HeroList {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: STATE.SUCCESS,
  cards: [
    DefaultCard.args,
    DefaultCard.args,
    ActivedCard.args,
    DefaultCard.args
  ]
};

export const Loading = Template.bind({});
Loading.args = {
  state: STATE.LOADING,
  cards: []
};

export const Failure = Template.bind({});
Failure.args = {
  state: STATE.FAILURE,
  cards: []
};

export const Empty = Template.bind({});
Loading.args = {
  state: STATE.SUCCESS,
  cards: []
};