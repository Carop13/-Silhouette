import React, {useState} from "react";
import logo from "../App/assets/images/logo.svg";
import {gql, useQuery} from "@apollo/client";

import { Input, Menu, Icon } from 'semantic-ui-react';
import './header.css';

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
        <>
        {
            data.categories.map(({id, title}) => (
                <Menu.Item
                    name={title}
                    href={`/plp/${id}`}
                />
            ))
        }
        </>
    );
}

const NavLinks = () => {
    return (
        <Menu.Menu position='right'>
            <Menu.Item>
                <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item>
                <Icon name='user circle' />
            </Menu.Item>
            <Menu.Item>
                <Icon name='shopping cart'/>
            </Menu.Item>
        </Menu.Menu>
    );
}

const Header = props => {

    return (
        <Menu secondary>
            <Menu.Item>
                <img src={logo} alt="logo" width={"150px"}/>
            </Menu.Item>

            <CategoriesList/>

            <NavLinks />
        </Menu>
    );
}

export default Header;