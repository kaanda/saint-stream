import React, { useEffect, useState } from "react";
import "./styles-components/style-content.components.css";
import { getMovieById, getFirstPopularMovie, getCast } from "../service/movies.service";
import SerieList from "./Series.component/SerieList.component";
import MovieList from "./Movies.components/MovieList.component";
import Cast from "./Movies.components/Cast.component";
import ContentButtons from "./ContentButtons.component";


//captura da url a info que vem depois da barra para pegar o id do filme
const getId = () => {
    const urlPathname = window.location.pathname;
    const urlParts = urlPathname.split('/');
    const id = urlParts[urlParts.length - 1];
    return id
}

export default function Content() {
    const [movie, setMovie] = useState({});
    const [cast, setCast] = useState([]);
    const id = getId();

    // caso o filme não tenha id, ele pega o primeiro filme popular, usando o useState para setar o filme
    const getMovie = async () => {
        if (id) {
            const response = await getMovieById(id);
            setMovie(response);
            // sabendo que o filme tem um id, ele chama a função getCast para pegar o elenco do filme
            getCasting(response.id);
        }else {
            const response = await getFirstPopularMovie();
            setMovie(response);
            // sabendo que o filme tem um id, ele chama a função getCast para pegar o elenco do filme
            getCasting(response.id); 
        }  
    }
    
    // pega o elenco do filme
    const getCasting = async (movieId) => {
        const response = await getCast(movieId);
        setCast(response);
    }

    useEffect(() => {
        // useEffect verifica o ciclo de vida do componente, e quando o componente é montado, ele chama a função getMovie
        // ele sempre é renderizado primeiro quando o componente é montado
        getMovie();        
    });

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

    return (
        <div className="content" style={styleContentBackground}>
            <div className="content-movies-or-series">
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
                    <h1>Filmes Populares para você</h1>
                    <MovieList />                
                </section>
                {/* <section className="content-movies">
                    <MovieList />
                </section> */}
                
            </div>
        </div>
    );
}
