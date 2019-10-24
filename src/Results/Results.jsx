import React from "react";
import data from "../model/data";
import RecipeCard from "./RecipeCard";

const Results = () => {
  return (
    <section>
      <h2>Welcome Results</h2>
      {data.recipes.map(recipe => (
        <RecipeCard
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
