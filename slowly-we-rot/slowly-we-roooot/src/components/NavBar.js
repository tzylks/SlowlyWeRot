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
import AlbumIcon from '@material-ui/icons/Album';
import LoyaltySharpIcon from '@material-ui/icons/LoyaltySharp';
import LibraryMusicSharpIcon from '@material-ui/icons/LibraryMusicSharp';

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

function NavBar({ search, setSearch }) {


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
        <NavLink to='/albums'>
          <AlbumIcon color="secondary" style={{paddingRight: "15px"}} />
        </NavLink>
        <NavLink to='/favorites'>
          <LoyaltySharpIcon color="secondary" style={{paddingRight: "15px"}}/>
        </NavLink>
        <NavLink to="/addalbum">
          <LibraryMusicSharpIcon color="secondary" style={{paddingRight: "15px"}}/>
        </NavLink>
      </Toolbar>
    </AppBar>

  )
}

export default NavBar