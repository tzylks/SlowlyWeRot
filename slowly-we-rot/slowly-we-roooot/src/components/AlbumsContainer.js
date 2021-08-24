import {useEffect, useState} from 'react'
import {Grid, Container} from '@material-ui/core'
import AlbumCard from "./AlbumCard"


function AlbumsContainer ({albums}) {

    

    return (
        <>
        <Container>
           {/* <div>{mappedAlbums}</div> */}
            <Grid container spacing={4} style={{marginTop: '50px'}}>
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