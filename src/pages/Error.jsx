import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import img from '../assets/not-found.svg';
import styled from 'styled-components';

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="Img Not Found" />
          <h3>Oh!</h3>
          <p>The page is not seem to find you are looking for</p>
          <Link to="/">Back to Home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>Some went wrong</h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 600px;
    width: 90vw;
    display: block;
    margin-top: 3rem;
    margin-bottom: 2rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    line-height: 1.5;
    color: var(--grey-500);
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  a {
    color: var(--primary-500);
    text-transform: capitalize;
  }
`;

export default Error;
