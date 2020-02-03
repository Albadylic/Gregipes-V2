import React, { useState, useEffect, useRef } from "react";
import data from "../model/data";
import genRandomIndex from "../utils/genRandomIndex";
import { Link } from "react-router-dom";
import "./Slider.css";

// Create an array which contains the indexes of three random recipes

const indexArray = [];
while (indexArray.length < 3) {
  const randomIndex = genRandomIndex(data.recipes);
  if (indexArray.indexOf(randomIndex) < 0) {
    indexArray.push(randomIndex);
  }
}

// This function will show one recipe at a time and will shift the visible recipe at a given interval

const VisibleRecipe = delay => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  // When an arrow key is pressed, move left or right

  useEffect(() => {
    const moveLeft = () => {
      if (visibleIndex > 0) {
        setVisibleIndex(visibleIndex => visibleIndex - 1);
      } else {
        setVisibleIndex(2);
      }
    };

    const moveRight = () => {
      if (visibleIndex < 2) {
        setVisibleIndex(visibleIndex => visibleIndex + 1);
      } else {
        setVisibleIndex(0);
      }
    };

    const handleKeyDown = event => {
      if (event.key === "ArrowLeft") {
        moveLeft();
      } else if (event.key === "ArrowRight") {
        moveRight();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [visibleIndex]);

  useInterval(() => {
    if (visibleIndex < 2) {
      setVisibleIndex(visibleIndex => visibleIndex + 1);
    } else {
      setVisibleIndex(0);
    }
  }, delay);

  return visibleIndex;
};

// This is a custom hook which will take a callback and delay.
// The hook will run the callback over the interval

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [delay]);
};

// Component

const Slider = () => {
  const recipeEndpoint = "/recipe/" + indexArray[VisibleRecipe()];
  const [isPlaying, setIsPlaying] = useState(4000);

  const updatePlayStatus = () => {
    if (isPlaying) {
      setIsPlaying(null);
    } else {
      setIsPlaying(4000);
    }
  };

  return (
    <section id="slider__container">
      <Link to={recipeEndpoint}>
        <h3 id="slider__title">
          {data.recipes[indexArray[VisibleRecipe(isPlaying)]].title}
        </h3>
      </Link>
      <img
        src={data.recipes[indexArray[VisibleRecipe(isPlaying)]].image}
        alt={data.recipes[indexArray[VisibleRecipe(isPlaying)]].title}
        id="slider__image"
      />
      <p id="slider__description">
        {data.recipes[indexArray[VisibleRecipe(isPlaying)]].description}
      </p>
      <article id="slider__buttons">
        <button onClick={updatePlayStatus}>Play/Pause</button>
      </article>
    </section>
  );
};

export default Slider;
