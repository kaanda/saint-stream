import React from "react";
import CardMovie from "./CardMovie.component";

export default function MovieList() {
    const movies = [{
            title: "Filme 1",
            rating: "16",
            genre: "Ação",
            img: ""
        },
        {
            title: "Filme 2",
            rating: "12",
            genre: "Comédia",
            img: ""
        },
        {
            title: "Filme 3",
            rating: "18",
            genre: "Terror",
            img: ""
    }]

    return (
        <>
            {movies.map((movie, index) => (
                <CardMovie key={index} movie={movie} />
            ))}
        </>
    );
}

{/* consulta os dados vindos da api de filmes populares
    vai usar o map para mapear filme a filme para um CardMovie
    
    CardMovie recebe como parâmetro um filme
    Distribui o conteúdo do filme nas suas posições

*/}