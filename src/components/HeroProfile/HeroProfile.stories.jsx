import React from "react";

import HeroProfile from "./HeroProfile";
import { Default as DefaultSpinner } from "../HeroCard/HeroCard.stories";
import { REQUEST_STATE } from "../../common/constants";

export default {
  title: "Components/HeroProfile",
  component: HeroProfile,
};

const Template = (args) => <HeroProfile {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: REQUEST_STATE.SUCCESS,
  spinnerDatas: [
    { ...DefaultSpinner.args, name: "str", text: "STR", value: 5 },
    { ...DefaultSpinner.args, name: "int", text: "INT", value: 5 },
    { ...DefaultSpinner.args, name: "agi", text: "AGI", value: 5 },
    { ...DefaultSpinner.args, name: "lul", text: "LUK", value: 10 },
  ],
  remainPoints: 0,
  isDisabledSubmit: false
};

export const Loading = Template.bind({});
Loading.args = {
  state: REQUEST_STATE.Loading,
};

export const Failure = Template.bind({});
Failure.args = {
  state: REQUEST_STATE.FAILURE,
};
