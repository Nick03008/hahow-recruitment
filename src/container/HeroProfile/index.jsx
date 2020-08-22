import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import HeroProfile from "../../components/HeroProfile/HeroProfile";
import { REQUEST_STATE } from "../../common/constants";

const fetchHeroProfile = (id) => {
  return new Promise((resolve) => {
    fetch(`https://hahow-recruit.herokuapp.com/heroes/${id}/profile`)
      .then((response) => response.json())
      .then(resolve);
  });
};

const updateHeroProfile = (id, data) => {
  return new Promise((resolve) => {
    fetch(`https://hahow-recruit.herokuapp.com/heroes/${id}/profile`, {
      body: JSON.stringify(data),
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    }).then(resolve);
  });
};

const useHeroProfile = (id) => {
  const [state, setState] = useState(REQUEST_STATE.LOADING);
  const [profile, setProfile] = useState({});
  const [remainPoints, setRemainPoints] = useState(0);

  const handleIncrease = (key) => {
    setRemainPoints(remainPoints - 1);
    setProfile({
      ...profile,
      [key]: profile[key] + 1,
    });
  };

  const handleDecrease = (key) => {
    const value = profile[key];
    if (value < 1) {
      throw Error("handleDecrease: Value can't be negative");
    }
    setRemainPoints(remainPoints + 1);
    setProfile({
      ...profile,
      [key]: value - 1,
    });
  };

  useEffect(() => {
    const handleFetchSuccess = (data) => {
      setProfile(data);
      setState(REQUEST_STATE.SUCCESS);
    };

    const handleFetchFailure = (error) => {
      console.error(error);
      setState(REQUEST_STATE.FAILURE);
    };

    fetchHeroProfile(id).then(handleFetchSuccess).catch(handleFetchFailure);
  }, [id]);

  return {
    state,
    profile,
    handleIncrease,
    handleDecrease,
    remainPoints,
  };
};

const Container = (props) => {
  const { profileId } = props;
  const [isSubmiting, setIsSubmiting] = useState(false);

  const {
    state,
    profile,
    handleIncrease,
    handleDecrease,
    remainPoints,
  } = useHeroProfile(profileId);

  const spinnerDatas = Object.keys(profile).map((key) => {
    const value = profile[key];
    return {
      name: key,
      text: key.toUpperCase(),
      value: value,
      disabledDecrease: value === 0,
      disabledIncrease: remainPoints === 0,
      onIncrease: handleIncrease,
      onDecrease: handleDecrease,
    };
  });

  const handleSubmit = () => {
    setIsSubmiting(true);
    updateHeroProfile(profileId, profile)
      .catch(console.error)
      .finally(() => {
        setIsSubmiting(false);
      });
  };

  return (
    <HeroProfile
      state={state}
      profile={profile}
      spinnerDatas={spinnerDatas}
      remainPoints={remainPoints}
      onSubmit={handleSubmit}
      isDisabledSubmit={isSubmiting || remainPoints !== 0}
    />
  );
};

Container.propTypes = {
  profileId: PropTypes.string.isRequired,
};

export default Container;
