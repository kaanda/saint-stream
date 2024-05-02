import React from "react";
import "./styles-components/style-content.components.css";
import MoviesContainer from "./Movies.components/MoviesContainer.component";
import SeriesContainer from "./Series.component/SeriesContainer.component";
import getIdForUrl from "./utils/get-id-for-url";
import MediaDataProvider from "../context/MediaDataContext";

export default function Content() {
    const {urlType} = getIdForUrl();
    let content = <MediaDataProvider>
                    <MoviesContainer />
                  </MediaDataProvider>;
    
    if (urlType === 'serie') {
        content = <MediaDataProvider>
                    <SeriesContainer />;
                  </MediaDataProvider>
        console.log('serie');
    }

    return (
        <div>
            {content}
        </div>
    );
}
