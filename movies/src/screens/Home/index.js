import React from 'react';
import { Container } from './styles';
import Filters from './components/Filters';
import AllMoviesList from './components/AllMoviesList';

const Home = () => (
  <Container>
    <Filters />
    <AllMoviesList />
  </Container>
);

export default Home;
