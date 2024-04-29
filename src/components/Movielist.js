import React from 'react';

function MovieList({ movies }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {movies.map((movie, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">{movie.movietitle}</h2>
          <img src={movie.moviemainphotos[0]} alt={movie.movietitle} className="w-full h-auto mb-2" />
          <p className="text-gray-700 mb-2"><strong>Languages:</strong> {movie.movielanguages.join(", ")}</p>
          <p className="text-gray-700 mb-2"><strong>Countries:</strong> {movie.moviecountries.join(", ")}</p>
          <p className="text-gray-700 mb-2"><strong>Genres:</strong> {movie.moviegenres.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
