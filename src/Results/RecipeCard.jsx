import React from "react";
import "./RecipeCard.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { border, compose, space, shadow, layout } from "styled-system";

const Article = styled.article`
  ${compose(border, layout, space, shadow)}
`;

Article.defaultProps = {
  width: "45vw",
  p: 0,
  m: 0,
  border: "solid black 0.1em"
};

const RecipeCard = ({ recipeIndex, title, description, image }) => {
  const recipeEndpoint = "/recipe/" + recipeIndex;
  return (
    <Article
      className="recipe-card__container"
      boxShadow="0.6em 0.4em 0.4em #e5e6e0"
    >
      <Link to={recipeEndpoint}>
        <h3 className="recipe-card__title">{title}</h3>
      </Link>
      <img src={image} alt={title} className="recipe-card__image" />
      <p className="recipe-card__description">{description}</p>
    </Article>
  );
};

export default RecipeCard;
