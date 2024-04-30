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
                       <a href={item.link}>{item.titulo}</a>
                    </div>                
                ))}
            <div className="navbar-search">
                <img src={searchIcon} alt="Search" className="img-search" />
            </div>
            </div>
        </div>
    );
}