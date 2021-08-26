import Flippy, { FrontSide, BackSide } from 'react-flippy';
import {Button} from '@material-ui/core'
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Tooltip from '@material-ui/core/Tooltip';


const styles = {
    bounce: {
      animation: 'x 4s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
  }

function FavCard({album, onDeleteFavorite}) {
    
    return (
        <StyleRoot>
        <div className="test" style={styles.bounce}>
        <Flippy
        color="primary"
        flipOnHover={true} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        style={{ width: '400px', height: '400px', marginBottom: '13px'}} /// these are optional style, it is not necessary
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
            style={{ backgroundColor: "black", color: "white", fontFamily: 'Metal Mania', textAlign: 'center', paddingTop: "10vh", border: "solid 10px" }}>
             <h1>{album.artist}</h1>
             <h2>{album.name}</h2>
             <h3>Length: {album.length}</h3>
             <Tooltip title="Permanently remove album" arrow style={{color: "black"}}>
                <Button onClick={() => onDeleteFavorite(album.id)} size="small" style={{ backgroundColor: '#b9f6ca' }}>Send Back to Hell</Button>
            </Tooltip>
        </BackSide>
    </Flippy>
    </div>
    </StyleRoot>
    )
}

export default FavCard