import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


function Footer() {
    return (
        <div style={{ margin: '10px 0px 0px 0px',
                      borderTop: '1px black solid',
                      position: 'fixed',
                      width: "100%",
                      left: '0px',
                      bottom: '0px',
                      opacity: '20%',
                      fontSize: '10px',
                      paddingBottom: '0px'
                       }}>
            <Grid container spacing={3}>
                <Grid item xs ={5} />
                <Grid item xs={3}>
                    &copy; 2020  
                    <a style={{textDecoration: 'none', color:'#001'}} target='__blank' href='http://www.jonahkarew.com' > Jonah Karew</a>
                </Grid>
                <Grid item xs={4} />
            </Grid>
        </div>
    )
}

export default Footer
