import { Card, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    card: {
        cursor: 'pointer',
        backgroundColor: 'black',
        color: 'green',
        "&:hover": {
            backgroundColor: "rgb(34, 34 , 34)",
        },
    },
    cardMedia: {
        margin: "auto",
        width: 130,
        height: 130,
    },
    cardContent: {
        textAlign: "center"
    },
    link: {
        textDecoration: "none"
    }
}));

export default function PokemonCard(props) {
    const classes = useStyles();
    const { pokemon, image } = props
    const { id, name} = pokemon
  return (
    <Grid item xs={12} sm={2} key={id}>
        <Link to={"/pokemon/" + id} className={classes.link}>
        <Card className={classes.card}>
            <CardMedia className={classes.cardMedia} image={image}></CardMedia>
            <CardContent className={classes.cardContent}>
                <Typography>
                 ♾️ {name} ♾️ 
                </Typography>
            </CardContent>
        </Card>
        </Link>

    </Grid>
  )
}