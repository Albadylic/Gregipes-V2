import React from "react";

const RecipeCard = ({ title, description, image, ingredients, method }) => {
  return (
    <article>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{description}</p>
    </article>
  );
};

export default RecipeCard;
