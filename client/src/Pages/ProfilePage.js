import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import NavBar from '../Components/NavBar/NavBar';
import Profile from '../Components/Profile/Profile';

function ProfilePage (props) {
  
console.log(props)
    // handleEmailChange = (event) => {
    //     this.child.setState({email: event.target.value})
    // }


    
        return (

            <div>
                <Container maxWidth='lg'>
                    <NavBar></NavBar>
                    <Profile />
                </Container>
            </div>
        )
    
}

export default ProfilePage