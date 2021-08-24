
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useEffect} from 'react'


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 240,
    },
    colored: {
        backgroundColor: "#000",
        color: "#fff"
    }
});



function AlbumCard({ album, setFavorites, favorites }) {

    const classes = useStyles();

    function onFavoriteClick(id) {
        fetch(`http://localhost:9292/albums/${id}`)
              .then((r) => r.json())
              .then(data => setFavorites([...favorites, data]));
    }


    return (
        <>
        <Card className={classes.colored}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={album.img_url}
                    title="Contemplative Reptile"
                />
                <CardContent color="secondary">
                    <Typography gutterBottom variant="h5" component="h2">
                        {album.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {album.length}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {album.rating}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={() => onFavoriteClick(album.id)} size="small" style={{backgroundColor: '#b9f6ca'}}>
                    Favorite
                </Button>
            </CardActions>
        </Card>

        
       </>
        

    )
}

export default AlbumCard