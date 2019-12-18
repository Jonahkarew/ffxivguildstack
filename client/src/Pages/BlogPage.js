import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import NavBar from '../Components/NavBar/NavBar';
import Button from '@material-ui/core/Button';
import Blog from '../Components/Blog/Blog'


export default function BlogPage(props){
    console.log(props)

    return(
        // props.loginStatus ? 
        <div>
        
            <Container maxWidth='lg'>
            <NavBar></NavBar>
            <Blog />
            <Button primary='stuff'>button</Button>
            </Container>
        </div>
   

   
        
    )
}

