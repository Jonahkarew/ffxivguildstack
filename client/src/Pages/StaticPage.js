import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import NavBar from '../Components/NavBar/NavBar';
import Static from '../Components/Static/Static';

class StaticPage extends Component {
  

    


    render() {
        return (
            <div>
                <Container maxWidth='lg'>
                    <NavBar></NavBar>
                    <Static />
                </Container>
            </div>
        )
    }
}

export default StaticPage