import React from "react";
import CardMovie from "./CardMovie.component";

export default function MovieList() {
    return(
        <div>
            <CardMovie />
            {/* consulta os dados vindos da api de filmes populares
                vai usar o map para mapear filme a filme para um CardMovie
                
                CardMovie recebe como parâmetro um filme
                Distribui o conteúdo do filme nas suas posições

            */}

        </div>
    )
}