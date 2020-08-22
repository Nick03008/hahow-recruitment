import React, { useState, useEffect } from "react";
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

const useHeroCards = () => {
  const [state, setState] = useState(REQUEST_STATE.LOADING);
  const [pureCards, setPureCards] = useState([]);
  const [activeId, setActiveId] = useState(0);

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

const Container = () => {
  const { state, cards } = useHeroCards();
  return <HeroList state={state} cards={cards} />;
};

export default Container;
