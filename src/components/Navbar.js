import React from "react";
import Logo from "./images/logo-nav.png"

export default function Navbar() {
    return (
        <nav>
            <img className="logo" src={Logo} alt="logo" />
            <p className="title-logo">my travel journal</p>
        </nav>
    )
}