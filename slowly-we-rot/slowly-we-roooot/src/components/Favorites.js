
import { Grid, Box } from '@material-ui/core'
import FavCard from "./FavCard"


function Favorites({ favorites, onDeleteFavorite }) {



    return (
        <>
            {/* <div className="work">
                <img src="https://rubentd.com/img/toasty.png" />
            </div> */}
                
                    {/* <div>{mappedAlbums}</div> */}
                    <Box style={{ overflow: 'auto', whiteSpace: "noWrap" }}>
                        <Grid container spacing={10} style={{ marginTop: '50px', marginBottom: '50px', paddingLeft: "30px"}} wrap="nowrap">
                            {favorites.map(album => {
                                return (<Grid key={album.id} item xs={12} md={6} lg={4}>
                                    <FavCard album={album} onDeleteFavorite={onDeleteFavorite} />
                                </Grid>)
                            })}
                        </Grid>
                    </Box>
                
        </>
            )
}

export default Favorites