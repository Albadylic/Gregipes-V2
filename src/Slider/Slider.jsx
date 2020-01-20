import React, { useState, useEffect, useRef } from "react";
import data from "../model/data";
import genRandomIndex from "../utils/genRandomIndex";
import { Link } from "react-router-dom";
import "./Slider.css";

// **TODO**
// Remove the array of Indexes if possible or otherwise simplify this
// Simplify component so that we're not using indexArray[visibleRecipe()] but something simpler instead
// In order to add in PlayPause&&keypress functionality, the visibleRecipe will need to be more reactive

// Create an array which contains the indexes of three random recipes

const indexArray = [];
while (indexArray.length < 3) {
  const randomIndex = genRandomIndex(data.recipes);
  if (indexArray.indexOf(randomIndex) < 0) {
    indexArray.push(randomIndex);
  }
}

// This function will show one recipe at a time and will shift the visible recipe at a fixed interval
const VisibleRecipe = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  // If play===true (i.e. if button is clicked)
  // When an arrow key is pressed, this should be paused and reset
  // I think that the logic inside (i.e. the if) could be used when the right arrow key is pressed also
  // The logic can be reversed for a press of left

  useInterval(() => {
    if (visibleIndex < 2) {
      setVisibleIndex(visibleIndex => visibleIndex + 1);
    } else {
      setVisibleIndex(0);
    }
  }, 4000);

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

// Add functions for move left and right.

// Add event listeners inside a useEffect

// Component

const Slider = () => {
  const recipeEndpoint = "/recipe/" + indexArray[VisibleRecipe()];
  return (
    <section id="slider__container">
      <Link to={recipeEndpoint}>
        <h3 id="slider__title">
          {data.recipes[indexArray[VisibleRecipe()]].title}
        </h3>
      </Link>
      <img
        src={data.recipes[indexArray[VisibleRecipe()]].image}
        alt={data.recipes[indexArray[VisibleRecipe()]].title}
        id="slider__image"
      />
      <p id="slider__description">
        {data.recipes[indexArray[VisibleRecipe()]].description}
      </p>
      <article id="slider__buttons">
        <button>Left</button>
        <button>Play/Pause</button>
        <button>Right</button>
      </article>
    </section>
  );
};

export default Slider;
