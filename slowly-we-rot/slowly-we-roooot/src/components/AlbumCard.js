
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

function AlbumCard({ album, setFavorites, favorites, onDelete }) {

    const classes = useStyles();

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
            <Card className={classes.colored}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={album.img_url}
                        title="album cover"
                    />
                    <CardContent color="secondary">
                        <Typography gutterBottom variant="h4" component="h2">
                            {album.artist}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            {album.name}
                        </Typography>
                        <Typography variant="body2" color="secondary" component="p">
                            Album Length: {album.length}
                        </Typography>
                        <Typography variant="body2" color="secondary" component="p">
                            Scale of Metal: {emojis()}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={() => onFavoriteClick(album.id)} size="small" style={{ backgroundColor: '#b9f6ca' }}>
                        Favorite
                    </Button>
                    <Button onClick={() => onDelete(album.id)} size="small" style={{ backgroundColor: '#b9f6ca' }}>
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default AlbumCard