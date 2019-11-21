import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import { mergeClasses } from '@material-ui/styles';
import Register from '../../Pages/Register';


const userStyles = makeStyles(theme => ({
    
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    input: {
        margin: theme.spacing(1)
    }
}))

function RegisterForm() {
    
 
    const classes = userStyles();
    
    return(
        <div className={classes.container}>
            <Input  
                    placeholder='Email' 
                    className={classes.input} 
                    inputProps={{'aria-label':'description'}}
                    >
            </Input>

            <Input  
                    placeholder='Password'
                    type='password' 
                    className={classes.input} 
                    inputProps={{'aria-label':'description'}}>
            </Input>
        </div>
    
    )
    
}

export default RegisterForm