import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import NavBar from '../Components/NavBar/NavBar';
import Button from '@material-ui/core/Button'


export default function Blog(props){
    console.log(props)

    return(
        // props.loginStatus ? 
        <div>
        
            <Container maxWidth='lg'>
            <NavBar></NavBar>
            <div>
                <p>this is where blog components will go once I finish up display all members on the static page</p>
            </div>

            <Button primary='stuff'>button</Button>
            </Container>
        </div>
   

   
        
    )
}

