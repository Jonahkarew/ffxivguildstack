import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';




const useStyles = makeStyles(theme => ({
    button: {
        width: '100%',
        height: '100%'
    }
}))

export default function LogoutButton(){
    const classes = useStyles();

    return(
        <div>
            <Button className={classes.button}>Logout</Button>
        </div>
    )
}