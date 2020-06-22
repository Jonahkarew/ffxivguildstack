import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'




const useStyles = makeStyles(theme => ({
    button: {
        width: '100%',
        height: '100%',
        textDecoration: 'none !important'
    },
    linkStyle: {
        textDecoration: 'none'
    }
}))


export default function LogoutButton(props){
    const classes = useStyles();

    
    return(
        <div>
            <Link className={classes.linkStyle} to="/" >
                <Button variant="contained"
                        color="secondary"
                        className={classes.button}
                        onClick={props.handleLogout}>Logout</Button>
            </Link>
        </div>
    )
}