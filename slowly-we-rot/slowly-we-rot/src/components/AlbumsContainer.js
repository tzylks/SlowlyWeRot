import {useEffect, useState} from 'react'
import {Grid, Container} from '@material-ui/core'
import AlbumCard from "./AlbumCard"


function AlbumsContainer () {

    const [albums, setAlbums] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:9292/albums")
          .then((r) => r.json())
          .then(setAlbums);
      }, []);

    const mappedAlbums = albums.map(album => {
       return (
        <Container>
            <Grid container>
                 <Grid item xs={12} md={6} lg={4}>
                     <AlbumCard album={album} />
                </Grid>
            </Grid>
       </Container>
       )
    })
    
    return (
        <>
        <Container>
           {/* <div>{mappedAlbums}</div> */}
            <Grid container>
                {albums.map(album => {
                    return (<Grid item xs={12} md={6} lg={4}>
                        <AlbumCard album={album} />
                    </Grid> )
                })}
            </Grid>
        </Container>
        </>
    )
}

export default AlbumsContainer