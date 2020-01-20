import React, { useState, useEffect, useRef } from "react";
import data from "../model/data";
import genRandomIndex from "../utils/genRandomIndex";
import { Link } from "react-router-dom";
import "./Slider.css";

// **TODO**
// Remove the array of Indexes if possible or otherwise simplify this
// In order to add in keypress functionality, the Counter will need to be more reactive
// Read up on what is happening in useRef
// Simplify component so that we're not using indexArray[Counter()] but something simpler instead

const indexArray = [];
while (indexArray.length < 3) {
  const randomIndex = genRandomIndex(data.recipes);
  if (indexArray.indexOf(randomIndex) < 0) {
    indexArray.push(randomIndex);
  }
}

const Counter = () => {
  const [count, setCount] = useState(0);

  useInterval(() => {
    if (count < 2) {
      setCount(count => count + 1);
    } else {
      setCount(0);
    }
  }, 4000);

  return count;
};

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

const Slider = () => {
  const recipeEndpoint = "/recipe/" + indexArray[Counter()];
  return (
    <article id="slider__container">
      <Link to={recipeEndpoint}>
        <h3 id="slider__title">{data.recipes[indexArray[Counter()]].title}</h3>
      </Link>
      <img
        src={data.recipes[indexArray[Counter()]].image}
        alt={data.recipes[indexArray[Counter()]].title}
        id="slider__image"
      />
      <p id="slider__description">
        {data.recipes[indexArray[Counter()]].description}
      </p>
    </article>
  );
};

export default Slider;
