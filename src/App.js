import React, { useState } from 'react';
import MovieList from '../src/components/Movielist';
import FilterMovies from '../src/components/FilterMovies';
import movieData from './movies.json';
import Navbar from './components/Navbar';

function App() {
  const [filteredMovies, setFilteredMovies] = useState(movieData);

  return (
    <div>

      <Navbar/>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Movie List</h1>
      <FilterMovies movies={movieData} setFilteredMovies={setFilteredMovies} />
      <MovieList movies={filteredMovies} />
    </div>
    </div>
  );
}

export default App;


