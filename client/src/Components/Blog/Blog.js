import React, { Component } from 'react';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class Blog extends Component {

    state ={
        currentUser: '',
        currentPostContent: '',
        currentUserId: '',
        posts: []
    }

    getBlogPost = () => {
        axios.get('api/user/getPosts').then((response)=> {
            this.setState({
                posts: response.data
            })
            // console.log(response)
        })

        // sets current user name in state
        const token = localStorage.getItem('accessToken')
        axios.get('/api/user/profile', {'headers': {token: token}})
            .then((response) => {
                console.log(response)
                this.setState({
                    currentUser: response.data.characterName,
                    currentUserId: response.data._id
                })
            }).catch((err) => console.log(err))
    }


     postBlog = (event) => {
        event.preventDefault();
        // const token = localStorage.getItem('accessToken')
        if(this.state.currentUser == ''){
            console.log('please log in to post')
        }
        else{
        axios.post('/api/user/postBlog', {
            postAuthor: this.state.currentUser,
            postContent: this.state.currentPostContent,
            postAuthorID: this.state.currentUserId
        })
        .then(
            console.log('post activates'),
            this.setState({
                currentPostContent: ''
            }),
            this.getBlogPost()
        )
     }
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
              postBox: {
                  width: '100%'
              },
              buttonGridItem: {
                  marginLeft: '400px'
              },
              button: {
                  width: '100%',
                  marginBottom: '30px',
                  justifyContent: 'center',
                  display: 'flex',
              },
              card: {
                minWidth: '275px',
                width: '100%',
              },
              bullet: {
                display: 'inline-block',
                margin: '0 2px',
                transform: 'scale(0.8)',
              },
              title: {
                fontSize: 14,
                textDecoration: 'underline',
              },
              pos: {
                marginBottom: 12,
              },
        }
        
        return (
            <div style={styles.root}>
                <Grid container spacing={3}>
                    <Grid item 
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
                    <div style={styles.button}>
                    <Grid item
                    md={6}
                    xs={12}>
                        <Button 
                            onClick={this.postBlog}
                            variant="contained"
                            color="primary"
                            style={styles.button}
                            >
                                this here poster button
                        </Button>
                    </Grid>
                    </div>
                    <div>
                        <Grid container spacing={3}>
                            {[...this.state.posts].reverse().map(result => {
                                return(
                                    <Grid item>
                                        <Card style={styles.card}>
                                            <CardContent>
                                                <Typography style={styles.title} variant='h5' component='h2'>
                                                    <b>{result.postAuthor}</b>
                                                </Typography>
                                                <Typography variant='body2' component='p'>
                                                    {result.postContent}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                )
                            })}
                    </Grid>
                    </div>
                </Grid>
            </div>
        )
    }
}
