import React from "react";
import { useState, useEffect } from "react";
import { allSeriesStatic, getFirstPopularSerie, getSeriesDetails } from "../../service/series.service";
import { getCasting } from "../utils/casting";
import getIdForUrl from "../utils/get-id-for-url";
import ContentButtons from "../ContentButtons.component";
import Cast from "../Cast.component";
import SerieList from "../Series.component/SerieList.component";

export default function SeriesContainer() {
    const [series, setSeries] = useState([]);
    const [serie, setSerie] = useState({});
    const [cast, setCast] = useState([]);
    const {id} = getIdForUrl();
    
    const getSeriesList = async () => {
        const response = await allSeriesStatic();
        // aqui no getCast ele pega o id da primeira série da lista de séries populares
        const idSerie = id ? id : response[0].id;
        await getCast(idSerie);
        //find é uma função que procura um item dentro de um array, e retorna o item que ele encontrou
        const firstSerie = response.find(serie => serie.id === idSerie);
        setSerie(firstSerie);
        setSeries(response);
    }

    const getCast = async (id) => {
        const response = await getCasting(id, 'tv');
        setCast(response);
    }

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
        <div id="series" style={styleContentBackground}>
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

    