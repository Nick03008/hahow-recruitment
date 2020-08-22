import React from "react";
import HeroListContainer from "../container/HeroList";
import { useHistory } from "react-router-dom";

const HeroProfilePage = () => {
  const history = useHistory();

  const onUpdateProfileId = (profileId) => {
    if (!profileId) {
      history.push("/heroes");
    } else {
      history.push(`/heroes/${profileId}`);
    }
  };
  return <HeroListContainer onUpdateProfileId={onUpdateProfileId} />;
};

export default HeroProfilePage;
