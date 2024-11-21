import React from 'react';
import { useMovies } from 'components/context/MovieContext';
import MovieCard from 'components/MovieCard/index';

function MovieCardWrapper() {
  const { movies } = useMovies();

  return (
    <div className="container">
      <div className="row">
        {movies.length > 0 && movies.map((movie) => (
          <div key={movie.id} className="col-sm-4 col-lg-3 col-xl-3 mb-3"> 
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieCardWrapper;