import React from "react";

const RecipeCard = ({ title, description, image, ingredients, method }) => {
  return (
    <article>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{description}</p>
      <ul>
        {ingredients.map(ingredient => (
          <li>{ingredient}</li>
        ))}
      </ul>
      <ol>
        {method.map(step => (
          <li>{step}</li>
        ))}
      </ol>
    </article>
  );
};

export default RecipeCard;
