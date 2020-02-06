import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LoginForm from '../LoginForm/LoginForm';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import LogoutButton from '../LogoutButton/LogoutButton';



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: '8',
        marginTop: '3%',
        padding: 0,
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
}))


export default function NavBar(props){
    const classes = useStyles();
    console.log("[NavBar.js] rendered")
    console.log("[NavBar.js] loginStatus:" + props.loginStatus)
    return(
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}><NavigationMenu/></Paper>
                </Grid>

                {props.loginStatus ?
                 <Grid item xs>
                 <Paper className={classes.paper}><LogoutButton handleLogout={props.handleLogout} checkLoginStatus={props.checkLoginStatus}/></Paper>
             </Grid>
               
                :   
                <Grid item xs>
                <Paper className={classes.paper}><LoginForm loginStatus={props.loginStatus} 
                                                            checkLoginStatus={props.checkLoginStatus} /></Paper>
            </Grid> 
               }
                 {/* <Grid item xs>
                    <Paper className={classes.paper}><LoginForm loginStatus={props.loginStatus} checkLoginStatus={props.checkLoginStatus} /></Paper>
                 </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}><LogoutButton handleLogout={props.handleLogout}/></Paper>
                </Grid> */}
            </Grid>
        </div>
    )
}
