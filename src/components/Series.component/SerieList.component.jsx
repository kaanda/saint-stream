import React from "react";
import Serie from "./Serie.component";
import SeasonsList from "./SeasonsList.component";


const style = {
    fontSize: "15px"
}

export default function SeriesList({series}) { 

    return (
        <div>
            {series.length <= 0 && <h1 style={style}>Carregando...</h1>}
            {series && series.map((serie, index) => (
                <div key={index}>
                    <Serie serie={serie} />
                    <SeasonsList seasons={serie.seasons} />
                </div>
            ))}
        </div>
    );
}
