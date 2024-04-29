import React from "react";
import { useState, useEffect } from "react";
import "../styles-components/style-content.components.css";
import { getFirstPopularMovie, getMovieById } from "../../service/movies.service";
import { getCasting } from "../utils/casting";
import getIdForUrl from "../utils/get-id-for-url";
import ContentButtons from "../ContentButtons.component";
import Cast from "../Cast.component";
import MovieList from "./MovieList.component";

export default function MoviesContainer() {

    const [movie, setMovie] = useState({});
    const [cast, setCast] = useState([]);
    const {id} = getIdForUrl();   

    // caso o filme não tenha id, ele pega o primeiro filme popular, usando o useState para setar o filme
    const getMovie = async () => {
        // aqui no request ele pega o id do filme, se não tiver ele pega o primeiro filme popular
        const request = id ? getMovieById(id) : getFirstPopularMovie();
        const response = await request;
        setMovie(response);
        // sabendo que o filme tem um id, ele chama a função getCast para pegar o elenco do filme
        const idMovie = id ? id : response.id;
        const getcasting = await getCasting(idMovie, 'movie');
        setCast(getcasting);    
    }

    useEffect(() => {
        // useEffect verifica o ciclo de vida do componente, e quando o componente é montado, ele chama a função getMovie
        // ele sempre é renderizado primeiro quando o componente é montado
        getMovie();      
    }, [id]);

    const styleContentBackground = {
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        position: "relative",
        zIndex: 0,
    };

    return(
        <div className="content" style={styleContentBackground}>
            <div className="content-movies-or-series">
                {/* fazer a condição para mostrar séries ou filmes */}
                <h1>Filmes populares</h1> 
            </div>
            <div className="content-sections">
                <section className="content-details">
                    <h1>{movie.title}</h1>
                    <p>{movie.release_date} - {movie.genres && movie.genres[0] && movie.genres[0].name}</p>
                </section>
                <ContentButtons />
                <section className="content-description">
                    <h2>Sinopse</h2>
                    <p>{movie.overview}</p>
                </section>
                <section className="content-actors">
                    <Cast cast={cast} />
                </section> 
                <hr className="content-hr" />
                <section className="content-movies">
                    <MovieList />                
                </section>
            </div>
        </div>                
    );
}
