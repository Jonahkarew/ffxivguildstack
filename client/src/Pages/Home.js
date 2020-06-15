import React, { useEffect } from 'react'
import Container from '@material-ui/core/Container'
import News from '../Components/News/News'
function Home (props) {

    useEffect(() => {
        console.log("[Home.js] useEffect")

        const timer = setTimeout(()=> {
            console.log('checking login status')
        }, 3000)
        return() => {
            clearTimeout(timer)
        }
    })

        return (
            <div>
                <Container maxWidth='lg'>
                    <News />
                </Container>
            </div>
        )
    
}

export default Home
