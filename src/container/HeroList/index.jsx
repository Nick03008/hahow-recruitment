import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import HeroList from "../../components/HeroList/HeroList";
import { REQUEST_STATE } from "../../common/constants";

const fetchHeroCards = () => {
  return new Promise((resolve, reject) => {
    fetch("https://hahow-recruit.herokuapp.com/heroes")
      .then((response) => response.json())
      .then(function (data) {
        resolve(data);
      });
  });
};

const useHeroCards = (profileId) => {
  const [state, setState] = useState(REQUEST_STATE.LOADING);
  const [pureCards, setPureCards] = useState([]);
  const [activeId, setActiveId] = useState(profileId);

  useEffect(() => {
    const handleFetchSuccess = (data) => {
      setPureCards(data);
      setState(REQUEST_STATE.SUCCESS);
    };

    const handleFetchFailure = (error) => {
      console.error(error);
      setState(REQUEST_STATE.FAILURE);
    };

    fetchHeroCards().then(handleFetchSuccess).catch(handleFetchFailure);
  }, []);

  const cards = pureCards.map((card) => {
    return {
      ...card,
      isActive: card.id === activeId,
      onClick: () => {
        if (activeId === card.id) {
          setActiveId(null);
        } else {
          setActiveId(card.id);
        }
      },
    };
  });

  return { state, cards, activeId };
};

const Container = (props) => {
  const { profileId, onUpdateProfileId } = props;

  const { state, cards, activeId } = useHeroCards(profileId);
  useEffect(() => {
    onUpdateProfileId && onUpdateProfileId(activeId);
    // eslint-disable-next-line
  }, [activeId]);
  return <HeroList state={state} cards={cards} />;
};

Container.propTypes = {
  profileId: PropTypes.string,
  onUpdateProfileId: PropTypes.func,
};

export default Container;
