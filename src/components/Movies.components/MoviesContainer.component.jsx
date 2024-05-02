import React, { useEffect, useState } from "react";
import ContentButtons from "../ContentButtons.component";
import Cast from "../Cast.component";
import MovieList from "./MovieList.component";
import { useMediaDataContext } from '../../context/MediaDataContext'

export default function MoviesContainer() {
    const { movies, cast, getMovie, id } = useMediaDataContext(); 
    const [selectedMovie, setSelectedMovie] = useState(movies[0]);

    useEffect(() => {
        // useEffect verifica o ciclo de vida do componente, e quando o componente é montado, ele chama a função getMovie
        // ele sempre é renderizado primeiro quando o componente é montado
        getMovie();      
    }, [id]);

    const styleContentBackground = {
        backgroundImage: selectedMovie ? `url(https://image.tmdb.org/t/p/w1280${selectedMovie.backdrop_path})` : `url(https://image.tmdb.org/t/p/w1280${movies.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        position: "relative",
        zIndex: 0,
    };

    const handleMovieSelect = (movies) => {
        setSelectedMovie(movies);
    };

    return(
        <div className="content" style={styleContentBackground}>
            <div className="content-movies-or-series">
                {/* fazer a condição para mostrar séries ou filmes */}
                <h1>Filmes populares</h1> 
            </div>
            <div className="content-sections">
                <section className="content-details">
                {selectedMovie && (
                <>
                    <h1>{selectedMovie.title}</h1>
                    <p>{selectedMovie.release_date} - {selectedMovie.genres && selectedMovie.genres[0] && selectedMovie.genres[0].name}</p>
                </>
                )}
                </section>
                <ContentButtons />
                <section className="content-description">
                    <h2>Sinopse</h2>
                    {selectedMovie && (
                    <>
                    <p>{selectedMovie.overview}</p>
                    </>
                    )}
                </section>
                <section className="content-actors">
                    <Cast cast={cast} />
                </section> 
                <hr className="content-hr" />
                <section className="content-movies">
                    <MovieList onMovieSelect={handleMovieSelect} />                
                </section>
            </div>
        </div>                
    );
}
