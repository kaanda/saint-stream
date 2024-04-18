import React from "react";
import Button from "./Button.component";
import play from "../images/play.png";
import bookmark from "../images/bookmark.png";
import thumbup from "../images/thumb-up.png";

export default function ContentButtons() {
    const redirectLink = (link) => window.open(link, "_self");
    const addFavorite = () => {
        alert("Adicionado aos favoritos");
    }
    const addLike = () => {
        alert("Like <3");
    }

    const buttons = [
        {
            className: "button-trailer",
            icon: play,
            alt: "Play",
            text: "Assita ao trailer",
            action: redirectLink,
            //aqui é utilizado o bind pq a função espera um parâmetro e o bind passa o parâmetro para a função. 
            //Se a função não esperasse parâmetros, poderia ser chamada diretamente: action: redirectLink
            link: "https://www.youtube.com"
        },
        {
            className: "button-favorite",
            icon: bookmark,
            alt: "Bookmark",
            text: "Adicione aos favoritos",
            action: addFavorite
        },
        {
            className: "button-like",
            icon: thumbup,
            alt: "thumb-up",
            text: "Like",
            action: addLike
        }
    ];

    return (
        <section className="content-buttons">
            {buttons.map((button, index) => (
                <Button button={button} key={index} />
            ))}
        </section>
    )
}