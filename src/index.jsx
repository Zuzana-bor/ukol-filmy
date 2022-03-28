import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from './Header/Header';
import Movie from './Movie/Movie';
import MovieList from './MovieList/MovieList';
import { movies } from './movies';

const App = () => (
  <>
    <Header />

    <MovieList movies={movies} />
  </>
);

render(<App />, document.querySelector('#app'));
