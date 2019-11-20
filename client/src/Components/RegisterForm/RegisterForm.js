import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import { mergeClasses } from '@material-ui/styles';


const userStyles = makeStyles(theme => ({
    
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    input: {
        margin: theme.spacing(1)
    }
}))


export default function RegisterForm() {
 
    const classes = userStyles();
    
    return(
        <div className={classes.container}>
            <Input  defaultValue='Hello World' 
                    className={classes.input} 
                    inputProps={{'aria-label':'description'}}></Input>
        </div>
    
    )
    
}