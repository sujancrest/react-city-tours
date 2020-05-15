import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <div className="logo">
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <ul className="navlink">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="about">About</Link>
                </li>
                <li>
                    <Link to="tourist">Tourist</Link>
                </li>
            </ul>
        </nav>
    )
}



export default Navbar;