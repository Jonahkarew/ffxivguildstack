import React from 'react'
import Container from '@material-ui/core/Container'
import NavBar from '../Components/NavBar/NavBar';
import Profile from '../Components/Profile/Profile';
import { Redirect } from 'react-router'


function ProfilePage (props) {
  
console.log(props)
    // handleEmailChange = (event) => {
    //     this.child.setState({email: event.target.value})
    // }


    
        return (
            props.loginStatus ? (
            <div>
                <Container maxWidth='lg'>
                    {/* <NavBar loginStatus={props.loginStatus}></NavBar> */}
                    <Profile />
                </Container>
            </div>
            ) : (
                <Redirect to='/' />
            )
        )
    
}

export default ProfilePage