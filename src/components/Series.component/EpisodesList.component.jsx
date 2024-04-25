import React from "react";
import Episode from "./Episode.component";
import CrewList from "./CrewList.component";


export default function EpisodesList({episodes}) {
    return (
        <div>
            {/* o slice(0, 3) pega os 3 primeiros episódios */}
            {episodes && episodes.slice(0, 3).map((episode, index) => (
                <Episode episode={episode} key={index} >
                    {/* aqui é onde a equipe é renderizada, porém tive que adicionar o children dentro do Episode, pois crewList está aqui dentro de Episode */}
                    <CrewList crew={episode.crew} />
                </Episode>
            ))} 
        </div>
    );
}
