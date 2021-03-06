import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import RegisterForm from '../RegisterForm/RegisterForm'
import axios from 'axios';





function getModalStyle () {
    return {
  
        transform: `translate(5%, 5%)`
    }
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: '400px',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        // margin: '50% 50%'
    },
    button: {
        width: '100%',
        height: '100%'
    },
    input: {
        width: 200,
        padding: theme.spacing(2)
    }
}))



export default function LoginForm(props)  {
    const classes = useStyles();
    const [ModalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false)
 
    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const [state, setState] = React.useState({
        email: '',
        password: ''
    })
   
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState({
           ...({...state, [name]:value}) 
        })
    }


    const handleLogin = (event) => {
        // event.preventDefault(event);
        const email = state.email;
        const password = state.password;

        axios.post('/api/user/login', {
            email: email,
            password: password
        }).then(token => {
            console.log(token);
            localStorage.setItem('accessToken', token.data);
      
            if(token){
            console.log ('This user is logged in.')
            props.checkLoginStatus()
            // window.location.reload();

            }
            else{
            console.log('This user is not logged in.')
    
            }
            // window.location.reload()
        })
        .catch(function (error){
            console.log(error)
        })
    }

   
   

        return (
            <div>
                <Button className={classes.button}
                    onClick={handleOpen}
                    variant="contained"
                    color="primary"
                >Login
                </Button>
                <Modal
                    aria-labelledby ='simple-modal-title'
                    aria-describedby='simple-modal-description'
                    open={open}
                    onClose={handleClose}
                    >
                        <div style={ModalStyle} className={classes.paper}>
                            <h2 id='modalTitle'>Join us!</h2>
                            <p id='modal description'>Login here to update your gear set and post messages for your fellow members.</p>
                            <TextField placeholder='Email' 
                                       name='email' 
                                       className={classes.input} 
                                       onChange={handleInputChange}/>
                            <TextField placeholder='Password'
                                       className={classes.input} 
                                       name='password'
                                       type='password'
                                       onChange={handleInputChange}></TextField>
                            <RegisterForm handleLogin={handleLogin}></RegisterForm>
                            <Button className={classes.button}
                                    onClick={handleLogin}        
                                            >Login</Button>
                        </div>
                    </Modal>
            </div>
        )
    
}


