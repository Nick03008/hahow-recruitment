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
    let mounted = true;
    const handleFetchSuccess = (data) => {
      if (!mounted) {
        return;
      }
      setPureCards(data);
      setState(REQUEST_STATE.SUCCESS);
    };

    const handleFetchFailure = (error) => {
      if (!mounted) {
        return;
      }
      console.error(error);
      setState(REQUEST_STATE.FAILURE);
    };

    fetchHeroCards().then(handleFetchSuccess).catch(handleFetchFailure);
    return () => (mounted = false);
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
  const [initFinished, setInitFinished] = useState(false);

  const { state, cards, activeId } = useHeroCards(profileId);
  useEffect(() => {
    if (!initFinished) {
      setInitFinished(true);
      return;
    }

    let mounted = true;
    mounted && onUpdateProfileId && onUpdateProfileId(activeId);

    return () => (mounted = false);
  }, [onUpdateProfileId, activeId]);
  return <HeroList state={state} cards={cards} />;
};

Container.propTypes = {
  profileId: PropTypes.string,
  onUpdateProfileId: PropTypes.func,
};

export default Container;
