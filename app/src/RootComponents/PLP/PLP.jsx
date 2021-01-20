import React from "react";
import Cards from "../../components/Cards/Cards";
import {gql, useQuery} from "@apollo/client";

const PLP_ATTRIBUTES = gql`
    fragment CategoryInfo on Category {
        id
        title
        products {
            id
            name
            image
            shortDescription
        }
    }
`;

// define products query
const CATEGORIES = gql`
    query categoryById($id: ID!) {
        categoryById(id: $id) {
            ...CategoryInfo
        }
    }
    ${PLP_ATTRIBUTES}
`;

const ProductList = ({id}) => {

    if (id === "" || !id) id = 1;

    const {loading, error, data} = useQuery(CATEGORIES, {
        variables: {id}
    });

    if (loading) return <p>Loading products...</p>
    if (error) return <p>Error loading products!</p>

    let response = data.categoryById;
    let products = response.products;

    return (
        <>
            <h2>{response.title}</h2>
            <section className={"CardsSection"}>
                {
                    products.map((data) => (
                        <Cards {...data} key={data.id}/>
                    ))
                }
            </section>
        </>
    )
};


const PLP = props => {
    const { match } = props;

    return (
        <>
            <ProductList id={match.params.id}/>
        </>
    );
};

export default PLP;
