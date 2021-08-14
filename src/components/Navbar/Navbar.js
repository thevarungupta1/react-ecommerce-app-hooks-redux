import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Menu, MenuItem, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons'
import logo from '../../assets/images/logo.png'

import useStyles from './styles';

const Navbar = () => {

    const classes = useStyles();

    return(
        <div>
            <AppBar position="fixed" className='' color="inherit">
                <Toolbar>
                    <Typography variant="h6" className="" color="inherit">
                        <img src={ logo } alt="myShop" height="25px" className=""/>
                        My Shop
                    </Typography>
                    <div className={ classes.grow } />
                    <div className="">
                        <IconButton aria-label="Show cart item" color="inherit">
                            <Badge badgeContent={5} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;