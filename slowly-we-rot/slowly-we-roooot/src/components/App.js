import AlbumsContainer from './AlbumsContainer'
import NavBar from "./NavBar"
import AddAlbum from "./AddAlbum"
import Favorites from "./Favorites"
import Footer from "./Footer"
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from 'react';
import { ThemeProvider } from "@material-ui/core"
import theme from "./theme.js"
import Deck from "./CardsDrag.tsx"
import ReactAudioPlayer from 'react-audio-player';
import audio from "../audio.mp3"




function App() {

  const [albums, setAlbums] = useState([])
  const [favorites, setFavorites] = useState([])
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);


  useEffect(() => {
    fetch("http://localhost:9292/albums")
      .then((r) => r.json())
      .then(setAlbums);
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/user_favorites")
      .then((r) => r.json())
      .then(setFavorites);
  }, []);

  function onDelete(id) {
    
    if (window.confirm("Are you sure you want to delete this item?")) {
      fetch(`http://localhost:9292/albums/${id}`, {
      method: "DELETE",
    })

    const filteredAlbums = albums.filter(album => album.id !== id)
    setAlbums(filteredAlbums)
    setOpen(false)
    }
    
  }

  function onDeleteFavorite(id) {
    fetch(`http://localhost:9292/user_favorites/${id}`, {
      method: "DELETE",
    })

    const filteredFavorites = favorites.filter(album => album.id !== id)
    setFavorites(filteredFavorites)
  }

  const albumsToDisplay = albums.filter((album) =>
    album.name.toLowerCase().includes(search.toLowerCase())
  );




  return (
    <>
      <div style={{ cursor: "url('https://img.icons8.com/plasticine/100/000000/cursor.png') 32 32" }}>
        <ThemeProvider theme={theme}>
          <div style={{ backgroundColor: "rgba(185, 246, 202, 1)"}}>
            <NavBar search={search} setSearch={setSearch} />
            <ReactAudioPlayer
              src={audio}
              autoPlay
              controls
              style={{marginLeft: "40vw", marginTop: "25px", color: "black"}}
            />
            <Switch>
              <Route
                path='/addalbum'
                component={() =>
                  <AddAlbum albums={albums} setAlbums={setAlbums} />}
              />
              <Route
                path='/favorites'
                component={() =>
                  <Favorites favorites={favorites} onDeleteFavorite={onDeleteFavorite} />}
              />
              <Route
                path='/albums'
                component={() =>
                  <AlbumsContainer albums={albumsToDisplay} setFavorites={setFavorites} favorites={favorites} onDelete={onDelete} 
                  open={open} setOpen={setOpen}/>}
              />
              <Route
                path='/'
                component={() =>
                  <Deck />}
              />
            </Switch>
            <Footer stye={{ bottom: 0 }} />
          </div>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
