import React from "react";

import logo from "../App/assets/images/logo.svg";

import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

function NavLinks() {
    return (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/">
                    Link 1
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/">
                    Link 2
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/">
                    Link 3
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/">
                    Link 4
                </Link>
            </li>
        </ul>
    );
}

const Header = props => {
    return (
        <header>
            <Link to="/">
                <img src={logo} alt="logo" width={"150px"} />
            </Link>
            <NavLinks />
        </header>
    );
}

export default Header;