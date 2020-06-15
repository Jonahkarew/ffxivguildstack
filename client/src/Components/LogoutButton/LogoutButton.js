import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'




const useStyles = makeStyles(theme => ({
    button: {
        width: '100%',
        height: '100%'
    }
}))

// const logout = (props) => {
//     // localStorage.removeItem('accessToken');

//     // this.props.history.push("/")
//     // props.checkLoginStatus()

//     // return(
//     //     <Link to="/" /> 
//     // )
       
    
// }



export default function LogoutButton(props){
    const classes = useStyles();

    
    return(
        <div>
            <Link to="/" >
                <Button className={classes.button}
                        onClick={props.handleLogout}>Logout</Button>
            </Link>
        </div>
    )
}