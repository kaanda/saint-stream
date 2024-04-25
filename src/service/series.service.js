import { default as seriesJson } from './series.json';

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzUyNTE3ZmU3ZTZkNTE2NjlhODI2NWI1ZWU2N2RhYiIsInN1YiI6IjY2MGFiNjM5MGI1ZmQ2MDE2MjM2MjAyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KSm6o5Kb9644iG85dZqq8qSEx_w0QVbyO1tBU1sDYCM'
    }
  };

//tmdb reference: https://developers.themoviedb.org/3/tv/get-popular-tv-shows
// get séries populares
const getPopularSeries = async () => {
    return fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options)
        .then(response => response.json())
        .catch(err => console.error(err));
}

//tmdb reference: https://developers.themoviedb.org/3/tv/get-tv-details
// get temporadas de uma série
const getSeasons = async (idSerie, idSeason) => {
    return fetch(`https://api.themoviedb.org/3/tv/${idSerie}/season/${idSeason}?language=en-US`, options)
        .then(response => response.json())
        .catch(err => console.error(err));
}

//tmdb reference: https://developers.themoviedb.org/3/tv/get-tv-episode-details
// get episódios de uma temporada
const getEpisodes = async (idSerie, idEpisode, idSeason) => {
    return fetch(`https://api.themoviedb.org/3/tv/${idSerie}/season/${idSeason}/episode/${idEpisode}?language=en-US`, options)
        .then(response => response.json())
        .catch(err => console.error(err));
}
//tmdb reference: https://developers.themoviedb.org/3/tv/get-tv-details
// get detalhes de uma série
const getSeriesDetails = async (idSerie) => {
    return fetch(`https://api.themoviedb.org/3/tv/${idSerie}?language=en-US`, options)
        .then(response => response.json())
        .catch(err => console.error(err));
}

const allSeries = async (allSeriesLimit = 3) => { // Limita a quantidade de séries que serão retornadas para não crashar o navegador
    try {
        const series = await getPopularSeries(); // Vai retornar do TMDB um conjunto de séries

        const allSeriesDetails = await Promise.all(series.results.slice(0, allSeriesLimit).map(async serie => {
            const serieDetails = await getSeriesDetails(serie.id); // Retorna os detalhes de cada série do TMDB

            const allSeasonDetails = await Promise.all(serieDetails.seasons.map(async season => {
                const seasonDetails = await getSeasons(serie.id, season.season_number);

                // Aqui assumimos que você quer retornar os detalhes de todos os episódios de uma temporada
                const episodesDetails = await Promise.all(seasonDetails.episodes.map(async (episode) => {
                    return episode; // Retorna detalhes do episódio
                }));

                return {
                    ...season, // Mantém os detalhes originais da temporada
                    episodesDetails // Adiciona os detalhes dos episódios à temporada
                };
            }));

            return {
                ...serieDetails, // Mantém os detalhes originais da série
                seasons: allSeasonDetails // Adiciona os detalhes das temporadas à série
            };
        }));
        return allSeriesDetails
    } catch (error) {
        console.error('Erro ao buscar séries:', error);
    }
}

const allSeriesStatic = async () => {
    //crie uma promisse chamada promissee com um timeout de 5 segundos
    const promissee = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(seriesJson);
        }, 2000);
    });
    return promissee;
}

 export { getPopularSeries, getSeasons, getEpisodes, getSeriesDetails, allSeries, allSeriesStatic};

// criar um novo componente que renderize todas as series populares
// criar um novo componente que renderize todas as temporadas de uma série
// criar um novo componente que renderize todos os episódios de uma temporada

// Preciso fazer um app com séries populares, temporadas e episódios. Terá um mosaico de séries populares, ao clicar em uma série, 
// mostrará as temporadas e ao clicar em uma temporada, mostrará os episódios
// Já tenho um objeto completo com todas as temporadas e episódios de uma série, ele é o allSeriesDetails, agora preciso renderizar isso

// componente - SerieList - lista todas as séries populares - fazer o map e chamar o componente SerieComponent- vou precisar usar o useState para armazenar as séries e useEffect para fazer a chamada da API e no map passar os parâmetros para frente
// componente - Serie.component - renderiza uma série 
// componente - SeasonList - lista todas as temporadas de uma série - fazer o map e chamar o componente SeasonComponent
// componente - Season.component - renderiza uma temporada
// componente - EpisodeList - lista todos os episódios de uma temporada - fazer o map e chamar o componente EpisodeComponent
// componente - Episode.component - renderiza um episódio
// screen PopularSeries.screen - renderiza o componente SerieList

// depois disso, vamos add o router e navegar entre as telas


// const getSeries = async () => {
//     const response = await allSeries()
// }

// useEffect(() => {
//     getSeries()
// }, []);