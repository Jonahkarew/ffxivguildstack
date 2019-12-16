import React, { Component } from 'react'
import RegisterForm from '../Components/RegisterForm/RegisterForm'
import Container from '@material-ui/core/Container'
import NavigationMenu from '../Components/NavigationMenu/NavigationMenu'
import LoginForm from '../Components/LoginForm/LoginForm'

class Register extends Component {
    state={
        email: "",
        password: ""
    }

    handleEmailChange = (event) => {
        this.child.setState({email: event.target.value})
    }


    render() {
        return (
            <div>
                <Container maxWidth='lg'>
                <NavigationMenu ></NavigationMenu>
               
                    <LoginForm />
                 
                    <RegisterForm />
                </Container>
            </div>
        )
    }
}

export default Register
