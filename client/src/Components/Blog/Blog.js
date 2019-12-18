import React, { Component } from 'react';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Blog extends Component {

    state ={
        currentUser: '',
        currentPostContent: '',
        posts: []
    }

    getBlogPost = () => {
        axios.get('api/user/getPosts').then((response)=> {
            console.log(response)
        })

        // sets current user name in state
        const token = localStorage.getItem('accessToken')
        axios.get('/api/userprofile', {'headers': {token: token}})
            .then((response) => {
                console.log(response)
                this.setState({
                    currentUser: response.data.characterName
                })
            }).catch((err) => console.log(err))
    }


     postBlog = (event) => {
         event.preventDefault();
        const token = localStorage.getItem('accessToken')
        axios.post('/api/user/postBlog', {'headers': { token: token }}, {
            postAuthor: this.state.currentUser,
            postContent: this.state.currentPostContent
        })
        .then(
            console.log('post activates')
        )
    }

    handlePostChange = (event) => {
        const{ name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    componentDidMount(){
        this.getBlogPost()
    }

    render() {
        const styles = {
            root: {
                flexGrow: 1,
              },
              paper: {
         
                textAlign: 'center',
            
              },
              textBox: {
                  width: '100%'
              },
              button: {
                  marginLeft: 'auto'
              }
        }
        
        return (
            <div style={styles.root}>
                <Grid container spacing={3}>
                    <Grid item 
                            // xl={12} 
                            // lg={12} 
                            // md={12} 
                            // sm={12} 
                            xs ={12}
                            >
                        <TextField
                            id="outlined-multiline-static"
                            style={styles.textBox}
                            label="Your post here"
                            name='currentPostContent'
                            value={this.state.currentPostContent}
                            multiline
                            rows="9"
                            variant="outlined"
                            onChange={this.handlePostChange}
                        />
                    </Grid>
                    <Grid item>
                        <Button 
                            onClick={this.postBlog}
                            variant="contained"
                            color="primary"
                            style={styles.button}
                            >
                                this here poster button
                        </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}