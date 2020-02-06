import React, { useEffect } from 'react'
import Container from '@material-ui/core/Container'
import NavBar from '../Components/NavBar/NavBar'

function Home (props) {
    // state={
    //     email: "",
    //     password: ""
    // }

    // handleEmailChange = (event) => {
    //     this.child.setState({email: event.target.value})
    // }

    useEffect(() => {
        console.log("[Home.js] useEffect")

        const timer = setTimeout(()=> {
            console.log('checking login status')
        }, 3000)
        return() => {
            clearTimeout(timer)
            // console.log(this.loginStatus)
        }
        // props.checkLoginStatus()
    })




    
        return (
            <div>
                <Container maxWidth='lg'>
                    {/* <NavBar
                     checkLoginStatus={props.checkLoginStatus}
                     loginStatus={props.loginStatus}
                     ></NavBar> */}
                </Container>
            </div>
        )
    
}

export default Home
