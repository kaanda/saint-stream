// faz a chamada para a API do TMDB e retorna o elenco do filme ou série com o id passado como parâmetro e type, para saber se é um filme ou série
export const getCast = async (id, type) => {
   
    if (type !== 'movie' && type !== 'tv') {
        throw new Error(`Invalid type: ${type}`);
    }

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzUyNTE3ZmU3ZTZkNTE2NjlhODI2NWI1ZWU2N2RhYiIsInN1YiI6IjY2MGFiNjM5MGI1ZmQ2MDE2MjM2MjAyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KSm6o5Kb9644iG85dZqq8qSEx_w0QVbyO1tBU1sDYCM'
        }
    };

    const url = `https://api.themoviedb.org/3/${type}/${id}/credits?language=en-US`

    return fetch(url, options)
    .then(response => response.json())
    // retornar somente os primeiros 5 atores
    .then(response => response.cast.slice(0,5))
    .catch(err => console.error(err));
}
