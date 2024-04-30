import React, { useEffect } from "react";
import CardMedia from "../CardMedia.component";
import { getPopularMoviesDetails } from "../../service/movies.service";
import Store, {context} from "../../store/Store.component";

const style = {
    fontSize: "15px"
}

export default function MovieList() {
    // const [movies, setMovies] = React.useState([]);
    const {setMovies, movies} = React.useContext(context);
    
    const getMoviesDetails = async () => {
        const response = await getPopularMoviesDetails();
        setMovies(response);
    }

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
        <Store>
            <div className="content-movie-list">
                <div className="h1-content-movie-list">
                    <h1>Filmes Populares para você</h1>
                </div>
                {movies.length <=0 && <h1 style={style}>Carregando...</h1>}
                <div className="container-movie-list">
                    {movies && movies.map((movie, index) => (
                        <CardMedia key={index} media={movie} mediaType="movie"/>
                    ))}
                </div>            

                <button id="arrow-left" className="arrow" />
                <button id="arrow-right" className="arrow" />

            </div>
        </Store>
    );
}
