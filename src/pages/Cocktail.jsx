import React from 'react';
import { useLoaderData, Link, Navigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/CocktailPage';
import axios from 'axios';
const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader = async ({ params }) => {
  const { id } = params;
  const response = await axios.get(`${singleCocktailUrl}${id}`);
  const { data } = response;
  return { id, data };
};

const Cocktail = () => {
  const { id, data } = useLoaderData();
  if (!data) return <Navigate to="/" />;
  const { drinks } = data;
  console.log(drinks);
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = drinks[0];

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          Home
        </Link>
        <h2>{name}</h2>
      </header>

      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className='drink-data'>Name: </span>
            {name}
          </p>
          <p>
            <span className='drink-data'>Category :</span> {category}
          </p>
          <p>
            <span className='drink-data'>Info :</span> {info}
          </p>
          <p>
            <span className='drink-data'>Glass :</span> {glass}
          </p>
          <p>
            <span className='drink-data'>Instructions :</span> {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
