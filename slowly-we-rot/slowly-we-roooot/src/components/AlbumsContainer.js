import {Grid, Box} from '@material-ui/core'
import AlbumCard from "./AlbumCard"


function AlbumsContainer ({albums, setFavorites, favorites, onDelete, open, setOpen, props}) {

    

    return (
        <>
        
           {/* <div>{mappedAlbums}</div> */}
           <Box style={{overflow: 'auto', whiteSpace: "noWrap"}}>
            <Grid container spacing={5} style={{paddingLeft: "30px", marginTop: '10px', marginBottom: '50px', width: "100vw"}} wrap="nowrap">
                {albums.map(album => {
                    console.log(album)
                    return (<Grid item key={album.id} xs={4} md={5} lg={4} style={{ display: "inline-block" }}>
                        <AlbumCard album={album} setFavorites={setFavorites} favorites={favorites} onDelete={onDelete} open={open} setOpen={setOpen} />  
                    </Grid> )
                })}
            </Grid>
            </Box>
     
        </>
    )
}

export default AlbumsContainer