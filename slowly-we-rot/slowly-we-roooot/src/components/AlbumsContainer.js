import {Grid, Container, Box} from '@material-ui/core'
import AlbumCard from "./AlbumCard"


function AlbumsContainer ({albums, setFavorites, favorites, onDelete}) {

    

    return (
        <>
        <Container style={{whiteSpace: "noWrap"}} >
           {/* <div>{mappedAlbums}</div> */}
           <Box style={{overflow: 'auto', whiteSpace: "noWrap"}}>
            <Grid container spacing={5} style={{marginTop: '50px', marginBottom: '50px'}} wrap="nowrap">
                {albums.map(album => {
                    return (<Grid item key={album.id} xs={4} md={3} lg={4} style={{ display: "inline-block"}}>
                        <AlbumCard album={album} setFavorites={setFavorites} favorites={favorites} onDelete={onDelete} />
                    </Grid> )
                })}
            </Grid>
            </Box>
        </Container>
        </>
    )
}

export default AlbumsContainer