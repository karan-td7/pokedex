import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    AppBar: {
        backgroundColor: 'green'
    },
    link: {
        textDecoration: 'none'
    },
    title: {
        cursor: 'pointer',
        color: 'black'
    }
}))
export default function AppNavigator() {
    const classes = useStyles()

    return (
        <AppBar className={classes.AppBar} postion="fixed">
            <Toolbar>
                <Link to='/' className={classes.link}>
                    <Typography className={classes.title} variant="h6">Pokedex</Typography>
                </Link>
                <Link to='/favourites' className={classes.link}>
                    <Typography className={classes.title} variant="h6" style={{ marginLeft: 15 }}>Favourites</Typography>,
                </Link>
            </Toolbar>
        </AppBar>
    )
}