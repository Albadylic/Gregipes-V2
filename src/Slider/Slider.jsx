import React, { useState, useEffect, useRef } from "react";
import data from "../model/data";

const genRandomIndex = () => {
  const index = Math.floor(Math.random() * data.recipes.length);
  return index;
};

const indexArray = [];
while (indexArray.length < 3) {
  const randomIndex = genRandomIndex();
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
  return (
    <article id="slider__container">
      <h3>{data.recipes[indexArray[Counter()]].title}</h3>
      <img
        src={data.recipes[indexArray[Counter()]].image}
        alt={data.recipes[indexArray[Counter()]].title}
      />
      <p>{data.recipes[indexArray[Counter()]].description}</p>
    </article>
  );
};

export default Slider;
