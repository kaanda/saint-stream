import React, { createContext, useState, useContext } from "react";
import { getFirstPopularMovie, getMovieById, getPopularMoviesDetails } from "../service/movies.service";
import { getCasting } from "../components/utils/casting";
import getIdForUrl from "../components/utils/get-id-for-url";
import { allSeriesStatic } from "../service/series.service";
import { getTrailerMovie } from "../service/trailer.service";

const MediaDataContext = createContext();
export const useMediaDataContext = () => useContext(MediaDataContext);

export default function Movies({ children }) {
    const [movies, setMovies] = useState({});
    const [cast, setCast] = useState([]);
    const {id} = getIdForUrl();  
    const [moviesList, setMoviesList] = useState([]);
    const [series, setSeries] = useState([]);
    const [serie, setSerie] = useState({});
    const [trailerLink, setTrailerLink] = useState('');
    const [loadingCast, setLoadingCast] = useState(true);
    
    const getSeriesList = async () => {
        const response = await allSeriesStatic();
        // aqui no getCast ele pega o id da primeira série da lista de séries populares
        const idSerie = id ? id : response[0].id;
        await getCast(idSerie);
        //find é uma função que procura um item dentro de um array, e retorna o item que ele encontrou
        const firstSerie = response.find(serie => serie.id === idSerie);
        setSerie(firstSerie);
        setSeries(response);
    }

    const getCast = async (id) => {
        setLoadingCast(true);
        const response = await getCasting(id, 'tv');
        setCast(response);
        setLoadingCast(false);
    }
    
    const getMoviesDetails = async () => {
        const response = await getPopularMoviesDetails();
        setMoviesList(response);
    } 

    const getTrailer = async (id) => {
        const trailerLink = await getTrailerMovie(id);
        setTrailerLink(trailerLink);
    }
    
    const getMovie = async () => {
        // aqui no request ele pega o id do filme, se não tiver ele pega o primeiro filme popular
        const request = id ? getMovieById(id) : getFirstPopularMovie();
        const response = await request;
        setMovies(response);
        const idMovie = id ? id : response.id;
        applyCast(idMovie);
        // sabendo que o filme tem um id, ele chama a função getCast para pegar o elenco do filme    
        getTrailer(idMovie);
        getMoviesDetails();
    }

    const applyCast = async (id) => {
        setLoadingCast(true);
        const getcasting = await getCasting(id, 'movie');
        setCast(getcasting);
        setLoadingCast(false);
    }
    
    return (
        <MediaDataContext.Provider value={{ movies, setMovies, cast, setCast, getMovie, id, moviesList, setMoviesList, getMoviesDetails, 
                                            getSeriesList, serie, series, trailerLink, applyCast, loadingCast }}>
            {children}
        </MediaDataContext.Provider>
    );
}
