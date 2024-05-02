import React from "react";
import star from "../images/star.png";

export default function CardMedia({ media, mediaType, onClick }) {
    const { title, poster_path, vote_average } = media;
    const genres = media.genres && media.genres[0] && media.genres[0].name;

    return (
        <div className="card-media" onClick={onClick} >
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className="img-card-media"/>
            <div className="content-media-info">
                <h2>{title}</h2>
            <div className="content-media-genresVote">
                    <img src={star} alt="Vote" className="img-star" />  {vote_average} | {genres}
            </div>
            </div>
        </div>
    )
}
