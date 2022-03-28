import React from 'react';
import movies from '../movies';
import Actor from '../Actor/Actor';

const Movie = ({ title, poster, year, rating, director, genre, cast }) => {
  return (
    <>
      <h2>{title}</h2>
      <img src={`/assets/${poster}`} alt="" />
      <p>
        {year}, {rating}, {director}, {genre}
      </p>
      <p></p>
    </>
  );
};

export default Movie;
