import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
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
    }
}))

export default function LoginForm()  {
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
            [name]:value
        })
        console.log(this.state.password)
    }

        return (
            <div>
                <Button className={classes.button}
                    button
                    onClick={handleOpen}
                >Login
                </Button>
                <Modal 
                    aria-labelledby ='simple-modal-title'
                    aria-describedby='simple-modal-description'
                    open={open}
                    onClose={handleClose}
                    >
                        <div style={ModalStyle} className={classes.paper}>
                            <h2 id='modalTitle'>Text Modal</h2>
                            <p id='modal description'>this is the description here</p>
                            <input type='text' onChange={handleInputChange} name='password'></input>
                        </div>
                    </Modal>
            </div>
        )
    
}


