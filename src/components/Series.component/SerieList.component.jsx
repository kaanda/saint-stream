import React, {useState} from "react";
import Serie from "./Serie.component";
import SeasonsList from "./SeasonsList.component";
import CardMedia from "../CardMedia.component";


const style = {
    fontSize: "15px"
}

export default function SeriesList({series}) { 

    const [selectedSeries, setSelectedSeries] = useState(null);

    const handleSeriesClick = (serie) => {
        setSelectedSeries(serie);
    };

    return (
        <div className="content-movie-list">
            <div className="h1-content-movie-list">
                <h1>Séries Populares para você</h1>
            </div>
            {series.length <= 0 && <h1 style={style}>Carregando...</h1>}
            
            <div className="container-movie-list">
                {series &&
                    series.map((serie, index) => (
                        <div key={index}>
                            <CardMedia
                                media={serie}
                                mediaType="tv"
                                onClick={() => handleSeriesClick(serie)}
                            />
                            {selectedSeries === serie && (
                                <>
                                    <Serie serie={serie} />
                                    <SeasonsList seasons={serie.seasons} />
                                </>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    )
}
