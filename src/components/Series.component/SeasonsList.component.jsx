import React from "react";
import Season from "./Season.component";
import EpisodesList from "./EpisodesList.component";

export default function SeasonsList({seasons}) {
    return (
        <div>
             {/* o slice(0, 3) pega as 3 primeiras temporadas */}
            {seasons && seasons.slice(0, 3).map((season, index) => (
                <div key={index}>
                    <h2>{season.name}</h2>
                    <Season season={season} >
                        {/* aqui é onde os episódios são renderizados, porém tive que adicionar o children dentro do Season, pois episodes está aqui dentro de Season */}
                      <EpisodesList episodes={season.episodesDetails} />
                    </Season>
                </div>
            ))}
        </div>
    )
}
