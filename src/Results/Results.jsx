import React from "react";
import data from "../model/data";
import RecipeCard from "./RecipeCard";
import "./Results.css";

const Results = () => {
  return (
    <section id="results__container">
      <h2 id="results__title">Welcome Results</h2>
      <section id="results__card-container">
        {data.recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            title={recipe.title}
            description={recipe.description}
            image={recipe.image}
            ingredients={recipe.ingredients}
            method={recipe.method}
          />
        ))}
      </section>
    </section>
  );
};

export default Results;
