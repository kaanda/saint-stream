import React from "react";
import "./styles-components/style-header.components.css";
import Navbar from "./Navbar.component";
import logo from "../images/logo.png";
import search from "../images/search.png";
import folderFilme from "../images/folder-film.png";

export default function Header() {
    const menuItems = ["Início", "Descobertas", "Filmes populares"];
    const logoImg = logo;
    const searchIcon = search;

    return (
        <div className="header">
            <img src={folderFilme} alt="capa do filme" className="img-folder-film"/>
            <Navbar menuItems={menuItems} logoImg={logoImg} searchIcon={searchIcon} />
        </div>
    );
}