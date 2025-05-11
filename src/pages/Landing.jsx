import React from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import CocktailList from '../Components/CocktailList';
import SearchForm from '../Components/SearchForm';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

export const loader = async ({ request }) => {
  const newUrl = new URL(request.url);
  const searchTerm = newUrl.searchParams.get('search') || 'a';
  const response = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
  );
  const data = await response.data.drinks;
  return { drinks: data, searchData: searchTerm };
};

const Landing = () => {
  const { drinks, searchData } = useLoaderData();
  return (
    <>
      <SearchForm searchData={searchData} />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;
