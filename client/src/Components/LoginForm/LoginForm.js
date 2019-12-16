import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';

function getModalStyle () {
    return {
  
        transform: `translate(-5%, -5%)`
    }
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: '400px',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
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
   
        return (
            <div>
                <ListItem 
                    button
                    onClick={handleOpen}
                >Open Modal
                </ListItem>
                <Modal 
                    aria-labelledby ='simple-modal-title'
                    aria-describedby='simple-modal-description'
                    open={open}
                    onClose={handleClose}
                    >
                        <div style={ModalStyle} className={classes.paper}>
                            <h2 id='modalTitle'>Text Modal</h2>
                            <p id='modal description'>this is the description here</p>
                        </div>
                    </Modal>
            </div>
        )
    
}


