import React from 'react';

function FilterMovies({ movies, setFilteredMovies }) {
  const languages = [...new Set(movies.flatMap(movie => movie.movielanguages))];
  const countries = [...new Set(movies.flatMap(movie => movie.moviecountries))];
  const genres = [...new Set(movies.flatMap(movie => movie.moviegenres))];

  const filterByLanguage = (e) => {
    const selectedLanguage = e.target.value;
    const filteredMovies = movies.filter(movie => movie.movielanguages.includes(selectedLanguage));
    setFilteredMovies(filteredMovies);
  };

  const filterByCountry = (e) => {
    const selectedCountry = e.target.value;
    const filteredMovies = movies.filter(movie => movie.moviecountries.includes(selectedCountry));
    setFilteredMovies(filteredMovies);
  };

  const filterByGenre = (e) => {
    const selectedGenre = e.target.value;
    const filteredMovies = movies.filter(movie => movie.moviegenres.includes(selectedGenre));
    setFilteredMovies(filteredMovies);
  };

  return (
    <div className="my-4">
      <label className="mr-4">
        Language:
        <select className="ml-2 p-2 border border-gray-300 rounded" onChange={filterByLanguage}>
          <option value="">All</option>
          {languages.map((lang, index) => (
            <option key={index} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </label>
      <label className="mr-4">
        Country:
        <select className="ml-2 p-2 border border-gray-300 rounded" onChange={filterByCountry}>
          <option value="">All</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </label>
      <label>
        Genre:
        <select className="ml-2 p-2 border border-gray-300 rounded" onChange={filterByGenre}>
          <option value="">All</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default FilterMovies;
