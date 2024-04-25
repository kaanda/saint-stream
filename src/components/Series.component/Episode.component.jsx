import React from "react";

export default function Episode({episode, index, children}) {
    return (        
        <div key={index}>
            <h2>Nome do episódio: {episode.name}</h2>
            <p>Descrição do episódio: {episode.overview}</p>

            {episode.still_path !== null ? (
                <img src={`https://image.tmdb.org/t/p/w300${episode.still_path}`} alt={episode.name} />     
            ) : null}
            <div>
                {children}
            </div>
        </div>
    );
}
