import React from "react";
//chamada do MovieList

export default function CardMovie({ movie }) {
    return(
        <>
            <div className="card-movie">
                <img src="" alt="Imagem do filme" />            
            </div>
            <div className="content-movie-info">
                <h2>Título do filme</h2>
                <span> * Classificação | Gênero</span>
            </div>
        </>
    )
}



//<img src={movie.img} alt="Imagem do filme" />   
//<h2>{movie.title}</h2>
//<span> * {movie.rating} | {movie.genre}</span>
         


{/* estrutura html para cada CardMovie 
    recebe um filme como parâmetro
    distribui o conteúdo do filme nas suas posições
*/}