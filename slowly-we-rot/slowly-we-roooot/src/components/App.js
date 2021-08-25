import AlbumsContainer from './AlbumsContainer'
import NavBar from "./NavBar"
import AddAlbum from "./AddAlbum"
import Favorites from "./Favorites"
import Footer from "./Footer"
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from 'react';
import { ThemeProvider } from "@material-ui/core"
import theme from "./theme.js"



function App() {

  const [albums, setAlbums] = useState([])
  const [favorites, setFavorites] = useState([])

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
    fetch(`http://localhost:9292/albums/${id}`, {
      method: "DELETE",
    })

    const filteredAlbums = albums.filter(album => album.id !== id)
    setAlbums(filteredAlbums)
  }

  function onDeleteFavorite(id) {
    fetch(`http://localhost:9292/user_favorites/${id}`, {
      method: "DELETE",
    })

    const filteredFavorites = favorites.filter(album => album.id !== id)
    setFavorites(filteredFavorites)
  }





  return (
    <>
      <div style={{ backgroundColor: "#b9f6ca" }}>
        <ThemeProvider theme={theme}>
          <div style={{ backgroundColor: "#b9f6ca" }}>
            <NavBar />
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
                path='/'
                component={() =>
                  <AlbumsContainer albums={albums} setFavorites={setFavorites} favorites={favorites} onDelete={onDelete} />}
              />
            </Switch>
            <Footer stye={{bottom: 0}} />
          </div>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
