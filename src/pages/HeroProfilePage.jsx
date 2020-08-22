import React from "react";
import HeroProfileContainer from "../container/HeroProfile";

const HeroProfilePage = (props) => {
  const {
    match: {
      params: { profileId = null },
    },
  } = props;
  return <HeroProfileContainer profileId={profileId} />;
};

export default HeroProfilePage;
