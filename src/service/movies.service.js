
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzUyNTE3ZmU3ZTZkNTE2NjlhODI2NWI1ZWU2N2RhYiIsInN1YiI6IjY2MGFiNjM5MGI1ZmQ2MDE2MjM2MjAyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KSm6o5Kb9644iG85dZqq8qSEx_w0QVbyO1tBU1sDYCM'
    }
  };

  //tmdb reference: https://developers.themoviedb.org/3/movies/get-movie-details
// faz a chamada para a API do TMDB e retorna o detalhe de um filme com o id passado como parâmetro
const getMovieById= async (id) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
    .then(response => response.json())
    .catch(err => console.error(err));
}

//tmdb reference: https://developers.themoviedb.org/3/movies/get-popular-movies
// faz a chamada para a API do TMDB e retorna os filmes populares
const getPopularMoviesDetails = async () => {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
        const movies = await response.json();
        const moviePromises = movies.results.map(movie => getMovieById(movie.id));
        const movieDetails = await Promise.all(moviePromises);
        return movieDetails;
    } catch (err) {
        console.error(err);
    }
}

//tmdb reference: https://developers.themoviedb.org/3/movies/get-popular-movies
// faz a chamada para a API do TMDB e retorna o primeiro filme popular
const getFirstPopularMovie = async () => {
    const movies = await getPopularMoviesDetails();
    return movies[0];
}

//tmdb reference: https://developers.themoviedb.org/3/movies/get-movie-credits
// faz a chamada para a API do TMDB e retorna o elenco do filme com o id passado como parâmetro
const getCast = async (id) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options)
    .then(response => response.json())
    // retornar somente os primeiros 5 atores
    .then(response => response.cast.slice(0,5)) 
    .catch(err => console.error(err));
}

export { getMovieById, getPopularMoviesDetails, getFirstPopularMovie, getCast};