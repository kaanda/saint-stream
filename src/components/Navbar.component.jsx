import React from "react";
import "./styles-components/style-header.components.css";
import Logo from "./Logo.component";

export default function Navbar({ menuItems, searchIcon }) {
    return (
        <div className="navbar">
            <div className="navbar-menu">
                <Logo logoImg={require("../images/logo.png")} />
                {menuItems.map((item, index) => (
                    <div key={index}>
                        <p>{item}</p>
                    </div>                
                ))}
            <div className="navbar-search">
                <img src={searchIcon} alt="Search" className="img-search" />
            </div>
            </div>
        {/* colocar cada item div em compoentes separados e chamar aqui */}
        </div>
    );
}