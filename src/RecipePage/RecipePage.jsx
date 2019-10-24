import React from "react";
import data from "../model/data";

const RecipePage = ({ id }) => {
  return (
    <section>
      <h2>{data.recipes[id].title}</h2>
      <img src={data.recipes[id].image} alt={data.recipes[id].title} />
      <p>{data.recipes[id].description}</p>
      <ul>
        {data.recipes[id].ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <ol>
        {data.recipes[id].method.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </section>
  );
};

export default RecipePage;
