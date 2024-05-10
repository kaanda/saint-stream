const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzUyNTE3ZmU3ZTZkNTE2NjlhODI2NWI1ZWU2N2RhYiIsInN1YiI6IjY2MGFiNjM5MGI1ZmQ2MDE2MjM2MjAyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KSm6o5Kb9644iG85dZqq8qSEx_w0QVbyO1tBU1sDYCM'
    }
  };

const getTrailerMovie = async (movieId) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options);
        const data = await response.json();
        if (data.results && data.results.length > 0) {
            const trailer = data.results[0];
            const trailerLink = `https://www.youtube.com/watch?v=${trailer.key}`;
            return trailerLink;
        } else {
            return '';
        }
    } catch (error) {
        console.error('Erro ao obter o trailer:', error);
        return '';
    }
}

const getTrailerSerie = async (serieId) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${serieId}/videos?language=en-US`, options);
        const data = await response.json();
        if (data.results && data.results.length > 0) {
            const trailer = data.results[0];
            const trailerLink = `https://www.youtube.com/watch?v=${trailer.key}`;
            return trailerLink;
        } else {
            return '';
        }
    } catch (error) {
        console.error('Erro ao obter o trailer:', error);
        return '';
    }
}





export { getTrailerMovie, getTrailerSerie };
