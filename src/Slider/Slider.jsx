import React from "react";
import data from "../model/data";

const genRandomIndex = () => {
  const index = Math.floor(Math.random() * data.recipes.length);
  return index;
};

let indexArray = [];
while (indexArray.length < 3) {
  const randomIndex = genRandomIndex();
  if (indexArray.indexOf(randomIndex) < 0) {
    indexArray.push(randomIndex);
  }
}

let recipeToShow = 0;

const Slider = () => {
  return (
    <article id="slider__container">
      <h3>Title</h3>
    </article>
  );
};

export default Slider;
