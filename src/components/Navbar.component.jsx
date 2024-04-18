import React from "react";
import "./styles-components/style-header.components.css";
import Logo from "./Logo.component";

export default function Navbar({ menuItems, logoImg, searchIcon }) {
    return (
        <div className="navbar">
            <div >
                <Logo logoImg={logoImg}/>
            </div>
            <div className="navbar-menu">
                {menuItems.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
            <div className="navbar-search">
                <img src={searchIcon} alt="Search" className="img-search" />
            </div>
        {/* colocar cada item div em compoentes separados e chamar aqui */}
        </div>
    );
}