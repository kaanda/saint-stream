import React from "react";
import "./styles-components/style-content.components.css";
export default function ContentDescription({ description }) {
    return (
        <section className="content-description">
            <h1>{description.title}</h1>
            <p>{description.text}</p>
        </section>
    );
}