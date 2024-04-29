import React from "react";
import "./styles-components/style-content.components.css";
import MoviesContainer from "./Movies.components/MoviesContainer.component";
import SeriesContainer from "./Series.component/SeriesContainer.component";

export default function Content() {

    return (
        <div>
            {/* <MoviesContainer /> */}
            <SeriesContainer />
        </div>
    );
}
