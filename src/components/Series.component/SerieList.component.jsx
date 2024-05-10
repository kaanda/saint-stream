import React, {useState} from "react";
import Serie from "./Serie.component";
import SeasonsList from "./SeasonsList.component";
import CardMedia from "../CardMedia.component";


const style = {
    fontSize: "15px"
}

export default function SeriesList({series}) { 

    const [selectedSeries, setSelectedSeries] = useState(null);

    const handleSeriesClick = async (serie) => {
        if (selectedSeries === serie) {
            setSelectedSeries(null); // Se a série clicada for a mesma que já está selecionada, volta ao estado original
        } else {
            setSelectedSeries(serie); // Caso contrário, seleciona a série clicada
        }
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
                            {selectedSeries === serie ? (
                                <>
                                    <Serie serie={serie} />
                                    <SeasonsList seasons={serie.seasons} />
                                </>
                            ) : (
                                <CardMedia
                                    media={serie}
                                    mediaType="tv"
                                    onClick={() => handleSeriesClick(serie)}
                                />
                            )}
                        </div>
                    ))}
            </div>
        </div>
    )
}
