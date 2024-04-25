import React from "react";

export default function Season({season, children}) {
    return (        
        <div>
            <div>
                <h3>{season.name}</h3>
                <p>{season.overview}</p>
                {season.poster_path !== null ?
                    <img src={`https://image.tmdb.org/t/p/w300${season.poster_path}`} alt={season.name} />
                : null}
                <div>
                    {/* aqui é onde os episódios são renderizados */}
                    {children} 
                </div>
            </div>
        </div>
    );
}
