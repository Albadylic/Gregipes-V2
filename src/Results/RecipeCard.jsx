import React from "react";
import "./RecipeCard.css";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipeIndex, title, description, image }) => {
  const recipeEndpoint = "/recipe/" + recipeIndex;
  return (
    <article className="recipe-card__container">
      <Link to={recipeEndpoint}>
        <h3 className="recipe-card__title">{title}</h3>
      </Link>
      <img src={image} alt={title} className="recipe-card__image" />
      <p className="recipe-card__description">{description}</p>
    </article>
  );
};

export default RecipeCard;
