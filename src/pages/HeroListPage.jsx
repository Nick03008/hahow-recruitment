import React from "react";
import HeroListContainer from "../container/HeroList/HeroListContainer";
import HeroProfileContainer from "../container/HeroProfile/HeroProfileContainer";
import { useHistory } from "react-router-dom";

const HeroListPage = (props) => {
  const history = useHistory();
  const {
    match: {
      params: { profileId = null },
    },
  } = props;

  const onUpdateProfileId = (profileId) => {
    if (!profileId) {
      history.push("/heroes");
    } else {
      history.push(`/heroes/${profileId}`);
    }
  };

  return (
    <>
      <HeroListContainer
        profileId={profileId}
        onUpdateProfileId={onUpdateProfileId}
      />
      {profileId && <HeroProfileContainer profileId={profileId} />}
    </>
  );
};

export default HeroListPage;
