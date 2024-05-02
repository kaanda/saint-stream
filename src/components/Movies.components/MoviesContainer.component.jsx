import React from "react";
import { useEffect } from "react";
import "../styles-components/style-content.components.css";
import ContentButtons from "../ContentButtons.component";
import Cast from "../Cast.component";
import MovieList from "./MovieList.component";
import { useMediaDataContext } from '../../context/MediaDataContext'

export default function MoviesContainer() {

    const { movies, cast, getMovie, id } = useMediaDataContext(); 

    useEffect(() => {
        // useEffect verifica o ciclo de vida do componente, e quando o componente é montado, ele chama a função getMovie
        // ele sempre é renderizado primeiro quando o componente é montado
        getMovie();      
    }, [id]);

    const styleContentBackground = {
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movies.backdrop_path})`,
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
                    <h1>{movies.title}</h1>
                    <p>{movies.release_date} - {movies.genres && movies.genres[0] && movies.genres[0].name}</p>
                </section>
                <ContentButtons />
                <section className="content-description">
                    <h2>Sinopse</h2>
                    <p>{movies.overview}</p>
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
