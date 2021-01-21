import React from "react";
import {gql, useQuery} from "@apollo/client";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Cards from "../../components/Cards/Cards";

const PDP_ATTRIBUTES = gql`
    fragment ProductInfo on Product {
        id
        name
        image
        shortDescription
        description
        price
        categories {
            id
            title
        }
    }
`;

// define products query
const PRODUCT = gql`
    query productById($id: ID!) {
        productById(id: $id) {
            ...ProductInfo
        }
    }
    ${PDP_ATTRIBUTES}
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

const ProductElem = ({id}) => {
    const classes = useStyles();

    if (id === "" || !id) id = 1;

    const {loading, error, data} = useQuery(PRODUCT, {
        variables: {id}
    });

    if (loading) return <p>Loading product...</p>
    if (error) return <p>Error loading product!</p>
    console.log('data', data);
    /*let response = data.productById;
    let product = response.product;*/

    return (
        <>
           {/* <div className={classes.root}>
                <h2 className={classes.title}>{response.title}</h2>
                <Grid container spacing={3}>
                    {
                        product.map((data) => (
                            <Grid item xs={12} sm={6} md={4} justify={'space-between'}>
                                <Cards {...data} key={data.id}/>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>*/}
        </>
    )
};


const PDP = props => {
    const { match } = props;

    return (
        <>
           <ProductElem id={match.params.id}/>
        </>
    );
};

export default PDP;
