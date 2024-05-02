import React, { useEffect } from "react";
import CardMedia from "../CardMedia.component";
import {moviesList, getMoviesDetails, useMediaDataContext} from "../../context/MediaDataContext"

const style = {
    fontSize: "15px"
}

export default function MovieList() {
    const {moviesList, getMoviesDetails} = useMediaDataContext();

    useEffect(() => {
        getMoviesDetails();

        const arrowRight = document.getElementById('arrow-right');
        const arrowLeft = document.getElementById('arrow-left');
        const contentMovieList = document.querySelector('.content-movie-list');

        if (arrowRight && arrowLeft && contentMovieList) {
            arrowRight.addEventListener('click', function() {
                contentMovieList.scrollBy({ top: 0, left: 200, behavior: 'smooth' });
            });

            arrowLeft.addEventListener('click', function() {
                contentMovieList.scrollBy({ top: 0, left: -200, behavior: 'smooth' });
            });
        }
    });

    return (
        
            <div className="content-movie-list">
                <div className="h1-content-movie-list">
                    <h1>Filmes Populares para você</h1>
                </div>
                {moviesList.length <=0 && <h1 style={style}>Carregando...</h1>}
                <div className="container-movie-list">
                    {moviesList && moviesList.map((movie, index) => (
                        <CardMedia key={index} media={movie} mediaType="movie"/>
                    ))}
                </div>            

                <button id="arrow-left" className="arrow" />
                <button id="arrow-right" className="arrow" />

            </div>
        
    );
}
