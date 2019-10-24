import React from "react";
import data from "../model/data";
import RecipeCard from "./RecipeCard";

const Results = () => {
  return (
    <section id="results__container">
      <h2 id="results__title">Welcome Results</h2>
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
  );
};

export default Results;
