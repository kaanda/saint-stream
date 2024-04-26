import React from "react";
import "./styles-components/style-header.components.css";
import Navbar from "./Navbar.component";
import logo from "../images/logo.png";
import search from "../images/search.png";


export default function Header() {
    const menuItems = ["Início", "Filmes Populares", "Séries populares"];
    const logoImg = logo;
    const searchIcon = search;

    return (
        <div className="header"> 
            <Navbar menuItems={menuItems} logoImg={logoImg} searchIcon={searchIcon} />
        </div>
    );
}