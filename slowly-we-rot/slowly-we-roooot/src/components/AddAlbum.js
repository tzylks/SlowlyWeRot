import {useState} from "react";
import { TextField, Container, Button } from "@material-ui/core";
import { Grid } from "@material-ui/core"
import {useHistory} from "react-router-dom";
import NavBar from './NavBar'

function AddAlbum({setAlbums}) {

    const [formData, setFormData] = useState({
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
            name: formData.name,
            length: formData.content,
            rating: formData.rating,
            img_url: formData.img_url
        }

        let config ={
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(newPost)
        }

        fetch('http://localhost:9292/albums', config)
        .then(res => res.json())
        .then(data => {
            setAlbums(data);
            history.push("/")
        })
        

    }
    
    return (
        <>

                <div
                    style={{
                        marginTop: "5%",
                        width: "100%",
                        textAlign: "center",
                        color: "#000",
                        justifyContent: "center",
                    }}
                >
                    <span
                        style={{
                            backgroundColor: "#111",
                            color: "#fff",
                            padding: "18px",
                            fontSize: "25px",
                            letterSpacing: "10px",
                            marginLeft: "auto",
                            marginRight: "auto"
                        }}
                    >
                        Add Album</span>
                </div>

                <Container>
                <form className="form"
                    onSubmit={onSubmitForm}
                >
                    <Grid container spacing={4}>
                        <Grid item xs={12}
                        style={{ 
                            background: "white", 
                            textAlign: "center", 
                            marginLeft: "auto", 
                            marginRight: "auto", 
                            marginTop: "10vh" 
                        }}
                        >
                            <TextField
                                fullWidth
                                label="Album Title"
                                id="name"
                                variant="outlined"
                                required
                                value={formData.name}
                                onChange={onChangeForm}
                            />
                        </Grid>
                        <Grid item xs={12}
                        style={{ 
                            background: "white", 
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
                                variant="outlined"
                                value={formData.length}
                                onChange={onChangeForm}
                            />

                        </Grid>
                        <Grid item xs={12}
                        style={{ 
                            background: "white", 
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
                                variant="outlined"
                                value={formData.rating}
                                onChange={onChangeForm}
                            />

                        </Grid>
                        <Grid item xs={12}
                        style={{ 
                            background: "white", 
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
                                variant="outlined"
                                value={formData.image_url}
                                onChange={onChangeForm}
                            />

                        </Grid>


                        <Button type="submit" variant="contained" color="secondary" className="form__custom-button" style={{ marginLeft: "auto",
                    marginRight: "auto" }}>
                            Sumbit Album
                        </Button>

                    </Grid>
                </form>
                </Container>
            
        </>


    )
}

export default AddAlbum