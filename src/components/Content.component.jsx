import React from "react";
import "./styles-components/style-content.components.css";
import ContentButtons from "./ContentButtons.component";
import MovieList from "./MovieList.component";

export default function Content() {
    return (
        <div className="content">
            <section className="content-details">
                <h1>Título do filme</h1>
                <p>Ano - Gênero</p>
            </section>
            <ContentButtons />
            <section className="content-description">
                <h2>Sinopse</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod, nunc nec vehicula fermentum, nunc odio aliquam
                    ligula, a euismod justo turpis id nisi. Nullam nec lacus
                    vitae nunc consequat consequat. Nullam nec lacus vitae nunc
                    consequat consequat.
                </p>
            </section>
            <section className="content-actors">
                <h2>Elenco</h2>
                <p>Ator 1, Ator 2, Ator 3</p>
            </section>
            <hr style={{border: "none", borderTop: "1px solid gray", width:"100%" }} />
            <section className="content-movies">
                <h1>Filmes Populares para você</h1>
                <MovieList />
                
            </section>
        </div>
    );
}
