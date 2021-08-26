import { useState } from "react";
import { TextField, Container, Button } from "@material-ui/core";
import { Grid } from "@material-ui/core"
import { useHistory } from "react-router-dom";
import { merge, fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const styles = {
    bounce: {
      animation: 'x 5s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn'),
      
    }
  }


function AddAlbum({ setAlbums, albums }) {

    const [formData, setFormData] = useState({
        artist: "",
        name: "",
        length: "",
        rating: "",
        img_url: ""
    })

    const history = useHistory();

    function onChangeForm(e) {
        setFormData(formData => { return { ...formData, [e.target.id]: e.target.value } })
    }

    function onSubmitForm(e) {
        e.preventDefault()

        const newPost = {
            artist: formData.artist,
            name: formData.name,
            length: formData.length,
            rating: formData.rating,
            img_url: formData.img_url
        }

        let config = {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(newPost)
        }

        fetch('http://localhost:9292/albums', config)
            .then(res => res.json())
            .then(data => {
                setAlbums([...albums, data]);
                history.push("/albums")
            })


    }

    return (
        <>


        <StyleRoot>
        <div className="test" style={styles.bounce}>
            <Container color="primary">
                <div
                    style={{
                        marginTop: "3%",
                        width: "100%",
                        textAlign: "center",
                        color: "#000",
                        justifyContent: "center",
                        fontFamily: 'Metal Mania',
                        backgroundColor: 'black',
                        height: "80px",
                        borderRadius: "10px"
                        
                    }}
                >
                    <span
                        style={{
                            backgroundColor: "",
                            opacity: "1",
                            color: "white",
                            padding: "18px",
                            fontSize: "130px",
                            letterSpacing: "40px",
                            marginLeft: "auto",
                            marginRight: "auto",
                            lineHeight: "70px",
                            paddingBottom: "100px"
                        }}
                    >
                        Add Album</span>
                </div>
                <form className="form"
                    onSubmit={onSubmitForm}
                    style={{ color: 'black' }}
                >
                    <Grid container spacing={4}>
                        <Grid item xs={12}
                            style={{
                                color: "black",
                                opacity: "1.0",
                                textAlign: "center",
                                marginLeft: "auto",
                                marginRight: "auto",
                                marginTop: "5vh"
                            }}
                        >
                            <TextField
                                fullWidth
                                label="Arist"
                                id="artist"
                                variant="outlined"
                                color="primary"
                                required
                                value={formData.artist}
                                onChange={onChangeForm}
                                style={{background: "white"}}
                            />
                        </Grid>
                        <Grid item xs={12}
                            style={{
                                background: "#b9f6ca",
                                textAlign: "center",
                                marginLeft: "auto",
                                marginRight: "auto",

                            }}
                        >
                            <TextField
                                fullWidth
                                label="Album Title"
                                id="name"
                                variant="outlined"
                                required
                                color="primary"
                                value={formData.name}
                                onChange={onChangeForm}
                                style={{background: "white"}}
                            />
                        </Grid>
                        <Grid item xs={12}
                            style={{
                                
                                textAlign: "center",
                                marginLeft: "auto",
                                marginRight: "auto"
                            }}
                        >
                            <TextField
                                fullWidth
                                label="Length of Album"
                                multiline
                                rows="1"
                                id="length"
                                required
                                color="primary"
                                variant="outlined"
                                value={formData.length}
                                onChange={onChangeForm}
                                style={{background: "white"}}
                            />

                        </Grid>
                        <Grid item xs={12}
                            style={{
                                
                                textAlign: "center",
                                marginLeft: "auto",
                                marginRight: "auto"
                            }}
                        >
                            <TextField
                                fullWidth
                                label="Rating"
                                multiline
                                rows="1"
                                id="rating"
                                required
                                color="primary"
                                variant="outlined"
                                value={formData.rating}
                                onChange={onChangeForm}
                                style={{background: "white"}}
                            />

                        </Grid>
                        <Grid item xs={12}
                            style={{
                             
                                textAlign: "center",
                                marginLeft: "auto",
                                marginRight: "auto"
                            }}
                        >
                            <TextField
                                fullWidth
                                label="Image URL"
                                multiline
                                rows="1"
                                id="img_url"
                                required
                                color="primary"
                                variant="outlined"
                                value={formData.image_url}
                                onChange={onChangeForm}
                                style={{background: "white"}}
                            />
                        </Grid>
                        <Button type="submit" variant="contained" color="primary" className="form__custom-button" style={{
                            marginLeft: "auto",
                            marginRight: "auto", marginTop: "30px", marginBottom: "30px"
                        }}>
                            Sumbit Album
                        </Button>

                    </Grid>
                </form>
            </Container>
            </div>
        </StyleRoot>

        </>


    )
}

export default AddAlbum