import AlbumsContainer from './AlbumsContainer'
import NavBar from "./NavBar"
import AddAlbum from "./AddAlbum"
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from 'react';
import {ThemeProvider} from "@material-ui/core"
import theme from "./theme.js"


function App() {
  
 const [albums, setAlbums] = useState([])
    
  useEffect(() => {
      fetch("http://localhost:9292/albums")
        .then((r) => r.json())
        .then(setAlbums);
    }, []);

  
  return (
   <>
   
   <ThemeProvider theme={theme}>
    <div style={{backgroundColor: "#b9f6ca"}}>
   <NavBar />
    <Switch>
    <Route
          path='/addalbum'
          component={() =>
            <AddAlbum setAlbums={setAlbums} />}
        />
    <Route
          path='/'
          component={() =>
            <AlbumsContainer albums={albums}/>}
        />
    </Switch>
    </div>
    </ThemeProvider>
    
   </>
  );
}

export default App;
