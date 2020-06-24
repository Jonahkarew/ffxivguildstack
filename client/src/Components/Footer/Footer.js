import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


function Footer() {
    return (
        <div style={{ margin: '10px 0px 0px 0px', 
                      bottom: '0px',
                      paddingBottom: '0'
                       }}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper>thing1</Paper>
                </Grid>


                <Grid item xs={3}>
                    thing2
                </Grid>
                <Grid item xs={3}>
                    thing3
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer
