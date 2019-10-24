import React from "react";

const RecipeCard = ({ title, description, image, ingredients, method }) => {
  return (
    <article className="recipe-card__container">
      <h3 className="recipe-card__title">{title}</h3>
      <img src={image} alt={title} className="recipe-card__image" />
      <p className="recipe-card__description">{description}</p>
    </article>
  );
};

export default RecipeCard;
