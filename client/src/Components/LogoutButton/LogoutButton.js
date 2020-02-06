import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom'




const useStyles = makeStyles(theme => ({
    button: {
        width: '100%',
        height: '100%'
    }
}))

const logout = () => {
    localStorage.removeItem('accessToken');

    // this.props.history.push("/")


    // return(
    //     <Link to="/" /> 
    // )
       
    
}



export default function LogoutButton(){
    const classes = useStyles();

    
    return(
        <div>
            <Link onClick={logout} to="/" >
            <Button className={classes.button}
                    onClick={logout}>Logout</Button>
            </Link>
        </div>
    )
}