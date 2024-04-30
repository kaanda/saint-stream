import React from "react";
import "./styles-components/style-content.components.css";
import MoviesContainer from "./Movies.components/MoviesContainer.component";
import SeriesContainer from "./Series.component/SeriesContainer.component";
import getIdForUrl from "./utils/get-id-for-url";

export default function Content() {
    const {urlType} = getIdForUrl();
    let content = <MoviesContainer />;
    
    if (urlType === 'serie') {
        content = <SeriesContainer />;
        console.log('serie');
    }

    return (
        <div>
            {content}
        </div>
    );
}
