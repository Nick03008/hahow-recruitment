import React from "react";

import HeroList from "./HeroList";
import {
  Default as DefaultCard,
  Actived as ActivedCard
} from "../HeroCard/HeroCard.stories";
import { REQUEST_STATE } from "../../common/constants";

export default {
  title: "Components/HeroList",
  component: HeroList,
};

const Template = (args) => <HeroList {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: REQUEST_STATE.SUCCESS,
  cards: [
    DefaultCard.args,
    DefaultCard.args,
    ActivedCard.args,
    DefaultCard.args
  ]
};

export const Loading = Template.bind({});
Loading.args = {
  state: REQUEST_STATE.LOADING,
  cards: []
};

export const Failure = Template.bind({});
Failure.args = {
  state: REQUEST_STATE.FAILURE,
  cards: []
};

export const Empty = Template.bind({});
Empty.args = {
  state: REQUEST_STATE.SUCCESS,
  cards: []
};