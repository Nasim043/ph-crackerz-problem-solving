const findTheMovie = (movieTitle, movieYear, arrOfMovies) => {
  const favMovie = arrOfMovies.find(movie => movie.title === movieTitle && movie.year === movieYear);
  return favMovie;
}

const movies = [
  {
    title: 'Star Wars',
    director: 'George Lucas',
    year: 1977
  },

  {
    title: 'The  Dark Knight',
    director: 'Christopher Nolan',
    year: 2008
  }
];
const output = findTheMovie('Star Wars', 1977, movies);
console.log(output);