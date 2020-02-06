import React from 'react'
import Container from '@material-ui/core/Container'
import NavBar from '../Components/NavBar/NavBar';
import Static from '../Components/Static/Static';

function StaticPage (props) {
  

    


   
        return (
            <div>
                <Container maxWidth='lg'>
                    <NavBar 
                    loginStatus={props.loginStatus}
                    ></NavBar>
                    <Static />
                </Container>
            </div>
        )
    
}

export default StaticPage