import Flippy, { FrontSide, BackSide } from 'react-flippy';
import {Button} from '@material-ui/core'
import toasty from 'toasty';

function FavCard({album, onDeleteFavorite}) {

    let t = toasty();
    

    return (
        <Flippy
        color="primary"
        flipOnHover={true} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        style={{ width: '400px', height: '400px', marginBottom: '55px', }} /// these are optional style, it is not necessary
    >
        <FrontSide
            style={{
                background: `url(${album.img_url})`,
                backgroundSize: "contain",
            }}
        >
        </FrontSide>
        <BackSide
            variant="main"
            style={{ backgroundColor: "black", color: "white", fontFamily: 'Metal Mania', textAlign: 'center' }}>
             <h1>{album.artist}</h1>
             <h2>{album.name}</h2>
             <h3>Length: {album.length}</h3>
             <Button onClick={() => onDeleteFavorite(album.id)} size="small" style={{ backgroundColor: '#b9f6ca' }}>
                        Send Back to Hell
             </Button>
        </BackSide>
    </Flippy>
    )
}

export default FavCard