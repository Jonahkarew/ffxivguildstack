import React from 'react';
import Container from '@material-ui/core/Container';
import NavBar from '../Components/NavBar/NavBar';
// import Button from '@material-ui/core/Button';
import Blog from '../Components/Blog/Blog'


export default function BlogPage(props){
    // console.log(props)
    console.log("[BlogPage.js loginStatus:" + props.loginStatus)
    return(
        // props.loginStatus ? 
        <div>
            
            <Container maxWidth='lg'>
            {/* <NavBar 
            // loginStatus={props.loginStatus}
            thing={"this is a prop"}
            loginStatus={props.loginStatus}
            ></NavBar> */}
            <Blog />
            </Container>
        </div>
   

   
        
    )
}

