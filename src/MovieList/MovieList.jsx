import React from 'react';
import Movie from '../Movie/Movie';

const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => (
        <Movie
          title={movie.title}
          poster={movie.poster}
          year={movie.year}
          rating={movie.rating}
          director={movie.director}
          genre={movie.genre}
        />
      ))}
    </>
  );
};

export default MovieList;
