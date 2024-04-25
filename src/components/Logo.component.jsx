import React from "react";

export default function Logo({logoImg}) {
    return (
        <div className="img-logo">
            <img src={logoImg} alt="Logo" />
        </div>
    );
}