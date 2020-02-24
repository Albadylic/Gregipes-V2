import React from "react";
import data from "../model/data";
import RecipeCard from "./RecipeCard";
import "./Results.css";
import styled from "styled-components";
import {
  compose,
  color,
  display,
  flexWrap,
  justifyContent
} from "styled-system";

const SectionContainer = styled.section`
  ${color}
`;

const CardContainer = styled(SectionContainer)`
  ${compose(display, flexWrap, justifyContent)}
`;

CardContainer.defaultProps = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center"
};

const Results = () => {
  return (
    <SectionContainer bg="#FFFCD8" color="#258EA6">
      <h2 id="results__title">Results</h2>
      <CardContainer>
        {data.recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            recipeIndex={index}
            title={recipe.title}
            description={recipe.description}
            image={recipe.image}
            ingredients={recipe.ingredients}
            method={recipe.method}
          />
        ))}
      </CardContainer>
    </SectionContainer>
  );
};

export default Results;
