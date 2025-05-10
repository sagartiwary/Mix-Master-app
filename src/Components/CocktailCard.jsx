import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CocktailCard = ({ id, name, image, info, glass }) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} name={name} className="img" />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`}>Info</Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--white);
  border-radius: 10px;
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  display: grid;
  grid-template-rows: auto 1fr;
  :hover {
    box-shadow: var(--shadow-4);
  }
  .img {
    height: 15rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .footer {
    padding: 1.5rem;
    h4,
    h5 {
      margin-bottom: 0.5rem;
    }
    h4 {
      font-weight: 700;
    }
    p {
      margin-bottom: 1rem;
      color: var(--grey-500);
    }
  }
`;

export default CocktailCard;
