import React from "react";
import data from "../model/data";

const RecipePage = () => {
  return (
    <section>
      <h2>{data.recipes[0].title}</h2>
      <img src={data.recipes[0].image} alt={data.recipes[0].title} />
      <p>{data.recipes[0].description}</p>
      <ul>
        {data.recipes[0].ingredients.map(ingredient => (
          <li>{ingredient}</li>
        ))}
      </ul>
      <ol>
        {data.recipes[0].method.map(step => (
          <li>{step}</li>
        ))}
      </ol>
    </section>
  );
};

export default RecipePage;
