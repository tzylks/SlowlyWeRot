
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';

import GitHubIcon from '@material-ui/icons/GitHub';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(0),
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
            <EmojiPeopleIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} style={{justifyContent: 'center', marginRight: 'auto', color: "white"}}>
            Github
          </Typography>
          <IconButton onClick={() => {window.location.href = "https://github.com/tzylks";}}><GitHubIcon fontSize="small" style={{color: "white"}} /></IconButton>
        </Toolbar>
      </AppBar>

    )
}

export default Footer