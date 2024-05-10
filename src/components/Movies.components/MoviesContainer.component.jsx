import React, { useEffect, useState } from "react";
import ContentButtons from "../ContentButtons.component";
import Cast from "../Cast.component";
import MovieList from "./MovieList.component";
import { useMediaDataContext } from '../../context/MediaDataContext'

export default function MoviesContainer() {
    const { movies, cast, getMovie, trailerLink, applyCast, loadingCast } = useMediaDataContext(); 
    const [selectedMovie, setSelectedMovie] = useState(movies[0]);
    
   
    const handleMovieSelect = async (movie) => {
        await applyCast(movie.id);
        setSelectedMovie(movie);
    };
    
    useEffect(() => {
        // Verificar o ciclo de vida do componente, e quando o componente é montado, chamar a função getMovie
        getMovie();       
    }, []);
    
    const firstMovies = {
        title: selectedMovie ? selectedMovie.title : movies.title,
        release_date: selectedMovie ? selectedMovie.release_date : movies.release_date,
        genres: selectedMovie ? selectedMovie.genres : movies.genres,
        overview: selectedMovie ? selectedMovie.overview : movies.overview,
        backdrop_path: selectedMovie ? `url(https://image.tmdb.org/t/p/w1280${selectedMovie.backdrop_path})` 
        : `url(https://image.tmdb.org/t/p/w1280${movies.backdrop_path})`
    }
    
    const styleContentBackground = {
        backgroundImage: firstMovies.backdrop_path,
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
                <h1>Filmes populares</h1> 
            </div>
            <div className="content-sections">
                <section className="content-details">
                {firstMovies && (
                <>
                    <h1>{firstMovies.title}</h1>
                    <p>{firstMovies.release_date} - {firstMovies.genres && firstMovies.genres[0] && firstMovies.genres[0].name}</p>
                </>
                )}
                </section>
                <ContentButtons trailerLink={trailerLink} />
                <section className="content-description">
                    <h2>Sinopse</h2>
                    {firstMovies && (
                    <>
                        <p>{firstMovies.overview}</p>
                    </>
                    )}
                </section>
                <section className="content-actors">
                    {loadingCast ? <p>Carregando...</p> : <Cast cast={cast} /> }
                </section> 
                <hr className="content-hr" />
                <section className="content-movies">
                    <MovieList onMovieSelect={handleMovieSelect} />                
                </section>
            </div>
        </div>                
    );
}
