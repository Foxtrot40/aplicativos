import React, { useEffect } from 'react';
import { Container } from './styles';
import handleGetMovieList from './services/handleGetMovieList';
import { connect } from 'react-redux';
import { ListItem, Loading } from './components';

const AllMoviesList = ({ movies }) => {
  useEffect(() => {
    handleGetMovieList();
  }, []);

  if (movies) {
    return (
      <Container
        data={movies}
        renderItem={({
          item: {
            ids: { tmdb },
          },
        }) => <ListItem tmdbId={tmdb} />}
      />
    );
  }

  return <Loading />;
};

const mapStateToProps = ({ home: { movies } }) => ({
  movies,
});

export default connect(mapStateToProps)(AllMoviesList);
