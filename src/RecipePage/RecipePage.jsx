import React from "react";
import data from "../model/data";

const RecipePage = ({ id }) => {
  return (
    <section id="recipe-page__container">
      <h2 id="recipe-page__title">{data.recipes[id].title}</h2>
      <img
        src={data.recipes[id].image}
        alt={data.recipes[id].title}
        id="recipe-page__image"
      />
      <p id="recipe-page__description">{data.recipes[id].description}</p>
      <ul className="recipe-page__list__container">
        {data.recipes[id].ingredients.map((ingredient, index) => (
          <li id="recipe-page__list__item" key={index}>
            {ingredient}
          </li>
        ))}
      </ul>
      <ol className="recipe-page__list__container">
        {data.recipes[id].method.map((step, index) => (
          <li key={index} id="recipe-page__list__item">
            {step}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default RecipePage;
