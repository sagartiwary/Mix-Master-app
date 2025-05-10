import React from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import CocktailList from '../Components/CocktailList';
import SearchForm from '../Components/SearchForm';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

export const loader = async () => {
  const searchData = '';
  const response = await axios.get(`${url}${searchData}`);
  const data = await response.data.drinks;
  return { drinks: data || [], searchData };
};

const Landing = () => {
  const { drinks, searchData } = useLoaderData();
  console.log(drinks);
  return (
    <>
      <SearchForm />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;
