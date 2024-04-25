import React, { useEffect, useState } from "react";
import { allSeriesStatic } from "../../service/series.service";
import Serie from "./Serie.component";
import SeasonsList from "./SeasonsList.component";

const style = {
    fontSize: "15px"
}

export default function SeriesList() {
    const [seriesList, setSeriesList] = useState([]);
    
    const getSeriesList = async () => {
        const response = await allSeriesStatic();
        setSeriesList(response);
    }

    useEffect(() => {
        getSeriesList();
    }, []);

    return (
        <div>
            {seriesList.length <= 0 && <h1 style={style}>Carregando...</h1>}
            {seriesList && seriesList.map((serie, index) => (
                <div key={index}>
                    <Serie serie={serie} />
                    <SeasonsList seasons={serie.seasons} />
                </div>
            ))}
        </div>
        
    );
}
