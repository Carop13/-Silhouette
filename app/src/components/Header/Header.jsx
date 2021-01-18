import React from "react";
import logo from "../App/assets/images/logo.svg";
import {gql, useQuery, useMutation} from "@apollo/client";

import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const HEADER_ATTRIBUTES = gql`
    fragment CategoryInfo on Category {
        id
        title
    }
`;

// define products query
const CATEGORIES = gql`
    query category {
        categories {
            ...CategoryInfo
        }
    }
    ${HEADER_ATTRIBUTES}
`;

const CategoriesList = () => {

    const {loading, error, data} = useQuery(CATEGORIES);

    if (loading) return <p>Loading categories...</p>
    if (error) return <p>Error loading categories!</p>

    return (
        <ul>
        {
            data.categories.map(({id, title}) => (
                <li key={id}>
                    <a href={`/plp/${id}`}>{title}</a>
                </li>
            ))
        }
        </ul>
    );
}

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
            <CategoriesList />
        </header>
    );
}

export default Header;