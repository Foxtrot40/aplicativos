import React, { useState, useEffect } from 'react';
import fetchMovieDataFromTmdb from './services/fetchMovieDataFromTmdb';
import {
  Container,
  PosterImage,
  ImageContainer,
  MovieInfoContainer,
  MovieTitle,
  RottenTomatoesIcon,
  MovieScheduleContainer,
  MovieTime,
} from './styles';
import { movieTimeRandomizer } from './services/movieScheduleRandomizer';

const ListItem = ({ tmdbId }) => {
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    (async function fetchMovieData() {
      const fetchedData = await fetchMovieDataFromTmdb(tmdbId);
      const movieSchedule = movieTimeRandomizer();

      setMovieData({ movieSchedule, ...fetchedData });
      console.log('schedule', fetchedData);
    })();
  }, [tmdbId]);

  return Object.keys(movieData).length ? (
    <Container>
      <ImageContainer>
        <PosterImage
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movieData.poster_path}`,
          }}
        />
      </ImageContainer>
      <MovieInfoContainer>
        <MovieTitle>{movieData.original_title}</MovieTitle>
        <MovieScheduleContainer>
          {movieData.movieSchedule.map((value, index) => (
            <MovieTime key={value + index}>{value}</MovieTime>
          ))}
        </MovieScheduleContainer>
        <MovieTitle>
          <RottenTomatoesIcon /> {movieData.vote_average}
        </MovieTitle>
      </MovieInfoContainer>
    </Container>
  ) : null;
};

export { ListItem };
