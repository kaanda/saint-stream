import React from "react";

export default function CardMovie({ movie }) {
    const { title, rating, genre, img } = movie;
    return(
        <>
            <div className="card-movie">
                <img src={img} alt="Imagem do filme" />            
            </div>
            <div className="content-movie-info">
                <h2>{title}</h2>
                <span> * {rating} | {genre}</span>
            </div>
        </>
    )
}

{/* estrutura html para cada CardMovie 
    recebe um filme como parâmetro
    distribui o conteúdo do filme nas suas posições
*/}