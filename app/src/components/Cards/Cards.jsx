import React, {useContext} from "react";
import "./cards.scss";
import {ConfigContext} from "../App/App";

import { makeStyles } from '@material-ui/core/styles';

import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, IconButton } from '@material-ui/core';
import { Favorite as FavoriteIcon, ShoppingCart } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        maxWidth: 350,
    },
    media: {
        height: 250,
    },
});

const Cards = props => {
    const { id, name, image, shortDescription } = props;
    const classes = useStyles();
    const context = useContext(ConfigContext);

    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={context.urlBE + image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" component="label">
                            SKU: {id}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                            {shortDescription}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="shopping cart">
                        <ShoppingCart />
                    </IconButton>
                </CardActions>
            </Card>
        </>
    );
}

export default Cards;
