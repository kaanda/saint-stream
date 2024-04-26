import React from "react";
import star from "../../images/star.png";

export default function CardMovie({ movie }) {
    const { title, poster_path, vote_average } = movie;
    const genres = movie.genres && movie.genres[0] && movie.genres[0].name;

    return (
        <>
            <div className="card-movie">
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className="img-card-movie"/>
            <div className="content-movie-info">
                <h2>{title}</h2>
                <div className="content-movie-genresVote">
                     <img src={star} alt="Vote" className="img-star" />  {vote_average} | {genres}
                </div>
            </div>
            </div>
        </>
    )
}
