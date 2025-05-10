import React from 'react';
import CocktailCard from './CocktailCard';
import styled from 'styled-components';

const CocktailList = ({ drinks }) => {
  if (!drinks || drinks.length == 0) {
    return <h2 className="section-title">No drinks found</h2>;
  }

  const filteredDrinks = drinks.map((drink) => {
    const { idDrink, strDrink, strDrinkThumb, strGlass, strAlcoholic } = drink;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });
  return (
    <Wrapper>
      {filteredDrinks.map((drink) => (
        <CocktailCard key={drink.id} {...drink} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

export default CocktailList;
