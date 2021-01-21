import React from "react";
import Cards from "../../components/Cards/Cards";
import {gql, useQuery} from "@apollo/client";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

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

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
    title: {
        padding: theme.spacing(2),
    }
}));

const ProductList = ({id}) => {
    const classes = useStyles();

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
            <div className={classes.root}>
                <h2 className={classes.title}>{response.title}</h2>
                <Grid container spacing={3}>
                {
                    products.map((data) => (
                        <Grid item xs={12} sm={6} md={4} key={data.id}>
                            <Cards {...data} />
                        </Grid>
                    ))
                }
                </Grid>
            </div>
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
