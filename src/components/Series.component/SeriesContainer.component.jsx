import React, { useEffect } from "react";
import ContentButtons from "../ContentButtons.component";
import Cast from "../Cast.component";
import SerieList from "../Series.component/SerieList.component";
import { useMediaDataContext } from '../../context/MediaDataContext'

export default function SeriesContainer() {

    const { getSeriesList, serie, series, cast } = useMediaDataContext();
  
    useEffect(() => {
        getSeriesList();        
    }, []);

    const styleContentBackground = {
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${serie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        position: "relative",
        zIndex: 0,
    };
    
    return(
        <div className="content" style={styleContentBackground}>
             <div className="content-movies-or-series">
                <h1>Séries populares</h1> 
            </div>
            <div className="content-sections">
                <section className="content-details">
                    <h1>{serie.name}</h1>
                    <p>{serie.first_air_date} - {serie.genres && serie.genres[0] && serie.genres[0].name}</p>
                </section>
                <ContentButtons />
                <section className="content-description">
                    <h2>Sinopse</h2>
                    <p>{serie.overview}</p>
                </section>
                <section className="content-actors">
                    <Cast cast={cast} />
                </section> 
                <hr className="content-hr" />
                <section className="content-movies">
                    <SerieList series={series} />                
                </section>
            </div>
        </div>                
    );
}

    