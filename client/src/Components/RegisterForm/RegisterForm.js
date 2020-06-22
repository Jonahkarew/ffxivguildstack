import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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

export default function RegisterForm(props)  {
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
        password: '',
        characterName: '',
        characterJob: '',
        gear: {
            weapon: {
                weaponName: "",
                weaponIlvl: 0
            },
            offHand: {
                offHandName: "",
                offHandIlvl: 0
            },
            head: {
                headName: "",
                headIlvl: 0
            },
            chest: {
                chestName: "",
                chestIlvl: 0
            },
            arms: {
                armsName: "",
                armsIlvl: 0
            },
            belt: {
                beltName: "",
                beltIlvl: 0
            },
            pants: {
                pantsName: "",
                pantsIlvl: 0
            },
            shoes: {
                shoesName: "",
                shoesIlvl: 0
            },
            earring: {
                earringName: "",
                earringIlvl: 0
            },
            necklace: {
                necklaceName: "",
                necklaceIlvl: 0
            },
            wrist: {
                wristName: "",
                wristIlvl: 0
            },
            ring1: {
                ring1Name: "",
                ring1Ilvl: 0
            },
            ring2: {
                ring2Name: "",
                ring2Ilvl: 0
            },
        }
    })
   
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState({
           ...({...state, [name]:value}) 
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault(event);
        const email = state.email;
        const password = state.password;
        const characterName = state.characterName;
        const characterJob = state.characterJob;
        const gear = state.gear;

        axios.post('/api/user/register', {
            email: email,
            password: password,
            characterName: characterName,
            characterJob: characterJob,
            gear: gear
        }).then(() => {
            console.log('this works')
            const logTimer = setTimeout(() => {
              
                    props.handleLogin()
            }, 3000)

            return () => {
                clearTimeout(logTimer)
                console.log("running register=> login function")
            }
            }

            
        
          
        )
    }

        return (
            <div>
                <Button className={classes.button}
                    button
                    onClick={handleOpen}
                >Register Here
                </Button>
                <Modal 
                    aria-labelledby ='simple-modal-title'
                    aria-describedby='simple-modal-description'
                    open={open}
                    onClose={handleClose}
                    >
                        <div style={ModalStyle} className={classes.paper}>
                            <h2 id='modalTitle'>Register here!</h2>
                            <p id='modal description'>Register here for all of your FFXIV Static needs!</p>
                            <TextField placeholder='Email' 
                                       name='email' 
                                       className={classes.input} 
                                       onChange={handleInputChange}/>
                            <TextField placeholder='Password'
                                       className={classes.input} 
                                       name='password'
                                       type='password'
                                       onChange={handleInputChange}></TextField>
                            <Button className={classes.button}
                                    onClick={handleSubmit}        
                                            >Submit</Button>
                        </div>
                    </Modal>
            </div>
        )
    
}