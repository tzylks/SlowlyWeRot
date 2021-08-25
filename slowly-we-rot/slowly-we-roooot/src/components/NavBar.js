import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { InputBase } from '@material-ui/core'
import BlurOnIcon from '@material-ui/icons/BlurOn';
import { NavLink } from 'react-router-dom';
import { useState } from 'react'


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

function NavBar({search, setSearch}) {


  const classes = useStyles();

  function onChangeSearch(event) {
    setSearch(event.target.value)
  }

  return (

    <AppBar position="sticky" >
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <BlurOnIcon />
        </IconButton>
        <Typography variant="h6" color="secondary" className={classes.title}>
          Slowly We Rot
        </Typography>
        <InputBase style={{ backgroundColor: "white" }} placeholder="Search Albums" value={search} onChange={onChangeSearch}
         />
        <Button component={NavLink} to='/' color="secondary">Home</Button>
        <Button component={NavLink} to='/favorites' color="secondary">Favorites</Button>
        <Button component={NavLink} to='/addalbum' color="secondary">Add Album</Button>
      </Toolbar>
    </AppBar>

  )
}

{/* <SearchBar
  style={{
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%"
  }}
  value={search.value}
  onCancelSearch={
    () => {
      setPageNumber(1);
      setSearch({ value: "" });
      setNewsData([]);
    }
  }
  onRequestSearch={
    (newValue) => {
      setPageNumber(1);
      setSearch({ value: newValue })
    }
  }
/> */}

export default NavBar