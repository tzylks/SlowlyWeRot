import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { InputBase } from '@material-ui/core'
import BlurOnIcon from '@material-ui/icons/BlurOn';
import SearchIcon from '@material-ui/icons/Search';
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
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  }
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
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
        <InputBase classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }} placeholder="Search Albums" value={search} onChange={onChangeSearch}
         />
         </div>
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