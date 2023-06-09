import { Box, Button, CircularProgress, Grid, Typography, withStyles } from "@material-ui/core";
import axios from "axios";
import React, { Component } from "react";
import { POKEMON_API_URL } from "../config";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { connect } from "react-redux";
import { toggleFavourite } from "../redux/action";

const styles = (theme) => ({
    pokedexContainer: {
        height: '80vh',
        backgroundColor: ' black',
        color: "green",
        marginTop: 75,
        textAlign: "center",
        borderRadius: 5,
        paddingTop: 30
    },
    textTitle: {
        textTransform: "upperCase",
        FontFace: 'Sans-serif'
    },
    pokemonImage: {
        width: "170px",
        height: " 170px",
        backgroundColor: 'black'
    },
    pokemonInfoContainer: {
        bottom: 60,
        position: "absolute",
        width: "98.7%"
    },
    seperator: {
        height: "0.0.1mm",
        width: "95%",
    },
    favourite: {
        height: 50,
        width: 50,
        marginTop: 15
    },
    text: {
        fontSize: 30,
    }
});

class PokemonDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: null,
        };
    }

    componentDidMount() {
        const { match } = this.props;
        const { id } = match?.params;
        axios.get(POKEMON_API_URL + "/" + id).then((response) => {
            if (response.status >= 200 && response.status < 300) {
                this.setState({ pokemon: response.data });
            }
        });
    }

    favouriteChecker(pokemon) {
        let found = false
        this.props.favourites?.map((p) => {
            if(p.id === pokemon.id) {
                found = true
            }
        })
        return found
    }
    render() {
        
        const { classes } = this.props
        const { pokemon } = this.state
        if (pokemon) {
            const { name, sprites, height, weight, types } = pokemon
            console.log(sprites)
            return (
                <Box>
                    <Box className={classes.pokedexContainer}>
                        <Typography className={classes.textTitle} variant="h1">
                            {name}
                        </Typography>
                        <img className={classes.pokemonImage} src={sprites.front_default} />
                        <Box className={classes.pokemonInfoContainer}>
                            <hr className={classes.seperator} />
                            <Grid container>
                                <Grid item md={1}>
                                    <Button
                                        className={classes.favourite}
                                        onClick={() => this.props.toggleFavourite(pokemon)}>
                                        <FavoriteIcon style={{ color: this.favouriteChecker(pokemon) ? "red" : "white", fontSize: 40 }} />
                                    </Button>
                                </Grid>
                                <Grid item md={2}>
                                    <Typography className={classes.text}>
                                        Name
                                        <hr className={classes.seperator} />
                                        {name}
                                    </Typography>
                                </Grid>
                                <Grid item md={2}>
                                    <Typography className={classes.text}>
                                        Height
                                        <hr className={classes.seperator} />
                                        {height}m
                                    </Typography>
                                </Grid>
                                <Grid item md={2}>
                                    <Typography className={classes.text}>
                                        Weight
                                        <hr className={classes.seperator} />
                                        {weight}kg
                                    </Typography>
                                </Grid>
                                {types.map((pokemonType) => {
                                    console.log(pokemonType)
                                    const { name } = pokemonType.type;
                                    return (
                                        <Grid item md={2}>
                                            <Typography className={classes.text}>
                                                Type
                                                <hr className={classes.seperator} />
                                                {name}
                                            </Typography>
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            )
        } else {
            return <CircularProgress />
        }
    }
}

const mapStateToProps = (state) => ({
     favourites: state.favourites
})

const mapDispatchToProps = (dispatch) => ({
    toggleFavourite: (pokemon) => dispatch(toggleFavourite(pokemon))
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(PokemonDetails));