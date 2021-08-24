
import {Grid, Container} from '@material-ui/core'
import AlbumCard from "./AlbumCard"


function Favorites ({favorites}) {

    

    return (
        <>
        <Container>
           {/* <div>{mappedAlbums}</div> */}
            <Grid container spacing={4} style={{marginTop: '50px'}}>
                {favorites.map(album => {
                    return (<Grid item xs={12} md={6} lg={3}>
                        <AlbumCard album={album} />
                    </Grid> )
                })}
            </Grid>
        </Container>
        </>
    )
}

export default Favorites