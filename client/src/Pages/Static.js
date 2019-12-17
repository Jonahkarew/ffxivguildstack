import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import NavBar from '../Components/NavBar/NavBar'

class Static extends Component {
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
                    <NavBar></NavBar>
                </Container>
            </div>
        )
    }
}

export default Static