import React from "react";
import { AppBar, Toolbar, Typography, Button} from '@material-ui/core';

const Header = () => {
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography  variant="title" color="inherit">
                    PRO STATS 
                </Typography>
                <Button color="inherit" style={{marginLeft: 1050}}>Menu</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
