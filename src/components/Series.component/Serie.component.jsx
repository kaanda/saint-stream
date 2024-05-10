import React from "react"

export default function Serie({ serie }) {
    return (        
        <div>
            <div className="content-serie">
                {serie.name}
                <img src={`https://image.tmdb.org/t/p/w300${serie.poster_path}`} alt={serie.name} />
            </div>
        </div>
        
    )
}