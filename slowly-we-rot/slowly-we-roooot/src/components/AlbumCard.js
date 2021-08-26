import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles({
    root: {
        maxWidth: 100,
    },
    media: {
        height: 283,
    },
    colored: {
        backgroundColor: "#000",
        color: "#fff",
        width: "300px",

    },
});

const styles = {
    bounce: {
      animation: 'x 4s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
  }


function AlbumCard({ album, setFavorites, favorites, onDelete, open, setOpen }) {
    const classes = useStyles();

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };


    // function handleClickClose(callback, id) {
    //     callback(id)
    //     setOpen(false)
    // }


    function onFavoriteClick(id) {

        const newPost = {
            user_id: 1,
            album_id: album.id,
            artist: album.artist,
            name: album.name,
            length: album.length,
            rating: album.rating,
            img_url: album.img_url
        }

        let config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': "application/json"
            },
            body: JSON.stringify(newPost)
        }

        fetch('http://localhost:9292/user_favorites', config)
            .then((r) => r.json())
            .then(data => setFavorites([...favorites, data]));
    }

    let tombstone = ''

    function emojis() {
        for (let i = 0; i < album.rating; i++) {
            tombstone += '🪦'
        }
        return tombstone
    }


    return (
        <>
        <StyleRoot>
        <div className="test" style={styles.bounce}>
            <Card className={classes.colored}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={album.img_url}
                        title="album cover"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h2" color="secondary">
                            {album.artist}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            {album.name}
                        </Typography>
                        <Typography variant="body2"  component="p">
                            Album Length: {album.length}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Scale of Metal: {emojis()}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Tooltip title="Add this item to favorites" arrow style={{color: "black"}}>
                    <Button onClick={() => onFavoriteClick(album.id)} size="small" style={{ backgroundColor: '#b9f6ca' }}>
                        Favorite
                    </Button>
                </Tooltip>
                <Tooltip title="Permanently remove album" arrow style={{color: "black"}}>
                    <Button onClick={() => onDelete(album.id)} size="small" style={{ backgroundColor: '#b9f6ca' }}>
                        Delete
                    </Button>
                </Tooltip>
                </CardActions>
            </Card>
            </div>
            </StyleRoot>

        </>
    )
}

export default AlbumCard