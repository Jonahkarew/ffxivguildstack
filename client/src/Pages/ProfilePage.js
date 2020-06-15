import React from 'react'
import Container from '@material-ui/core/Container'
import Profile from '../Components/Profile/Profile';
import { Redirect } from 'react-router'


function ProfilePage (props) {
  
console.log(props)


    
        return (
            props.loginStatus ? (
            <div>
                <Container maxWidth='lg'>
                    <Profile />
                </Container>
            </div>
            ) : (
                <Redirect to='/' />
            )
        )
    
}

export default ProfilePage