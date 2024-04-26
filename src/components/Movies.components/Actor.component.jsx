import React from "react";

export default function Actor({actor}) {
    return (
        <div className="photos-container">
            {actor.profile_path ? (
                <img 
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} 
                alt={actor.name} 
                className="round-photo"
                />
            ) : null}

            <p>{actor.name}</p>
            
        </div>
    );
}

