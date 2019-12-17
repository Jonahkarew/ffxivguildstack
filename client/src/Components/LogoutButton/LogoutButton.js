import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';




const useStyles = makeStyles(theme => ({
    button: {
        width: '100%',
        height: '100%'
    }
}))

const logout = () => {
    localStorage.removeItem('accessToken');
    window.location.reload()
}

export default function LogoutButton(){
    const classes = useStyles();

    return(
        <div>
            <Button className={classes.button}
                    onClick={logout}>Logout</Button>
        </div>
    )
}