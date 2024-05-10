import React, { useEffect } from "react";
import CardMedia from "../CardMedia.component";
import {useMediaDataContext} from "../../context/MediaDataContext"
import ScrollArrows from "../utils/scrollArrows";

const style = {
    fontSize: "15px"
}

export default function MovieList({ onMovieSelect }) {
    const { moviesList} = useMediaDataContext();

    const handleMovieClick = (movies) => {
        console.log(movies);
        onMovieSelect(movies);
    };

    return (
        <div className="content-movie-list">
            <div className="h1-content-movie-list">
                <h1>Filmes Populares para você</h1>
            </div>
            {moviesList.length <=0 && <h1 style={style}>Carregando...</h1>}
            
            <div className="container-movie-list">
                {moviesList && moviesList.map((movie, index) => (
                    <CardMedia key={index} media={movie} mediaType="movie" onClick={() => handleMovieClick(movie)}/>
                ))}
            </div>            
            <ScrollArrows />
        </div>
    );
}
