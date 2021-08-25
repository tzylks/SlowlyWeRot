import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import { NavLink } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function Footer() {

    const classes = useStyles();

    return(
        
        <AppBar position="sticky" style={{alignItems: 'center'}} >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <BlurOnIcon />
          </IconButton>
          <Typography variant="h6" color="secondary" className={classes.title} style={{justifyContent: 'center', marginRight: 'auto'}}>
            Github
          </Typography>
          <IconButton onClick={() => {window.location.href = "https://github.com/tzylks";}}><GitHubIcon color="secondary" fontSize="small" /></IconButton>
          <Button component={NavLink} to='/' color="secondary">Home</Button>
          <Button component={NavLink} to='/favorites' color="secondary">Favorites</Button>
          <Button component={NavLink} to='/addalbum' color="secondary">Toasty</Button>
        </Toolbar>
      </AppBar>

    )
}

export default Footer