import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'


class Profile extends Component {
   
    state = {
        email: '',
        characterName: '',
        characterJob: '',
        weaponName: '',
        weaponIlvl: '',
        offHandName: '',
        offHandIlvl: '',
        headName: '',
        headIlvl: '',
        chestName: '',
        chestIlvl: '',
        armsName: '',
        armsIlvl: '',
        beltName: '',
        beltIlvl: '',
        pantsName: '',
        pantsIlvl: '',
        shoesName: '',
        shoesIlvl: '',
        earringName: '',
        earringIlvl: '',
        necklaceName: '',
        necklaceIlvl: '',
        wristName: '',
        wristIlvl: '',
        ring1Name: '',
        ring1Ilvl: '',
        ring2Name: '',
        ring2Ilvl: ''
        }

    handleSubmit = (event) => {
        event.preventDefault();

        axios.put('/api/user/update/', {
            email: this.state.email,
            characterName: this.state.characterName,
            characterJob: this.state.characterJob,
            gear: {
                weapon: {
                    weaponName: this.state.weaponName,
                    weaponIlvl: this.state.weaponIlvl,
                },
                offHand: {
                    offHandName: this.state.offHandName,
                    offHandIlvl: this.state.offHandIlvl,
                },
                head: {
                    headName: this.state.headName,
                    headIlvl: this.state.headIlvl,
                },
                chest: {
                    chestName: this.state.chestName,
                    chestIlvl: this.state.chestIlvl,
                },
                arms: {
                    armsName: this.state.armsName,
                    armsIlvl: this.state.armsIlvl,
                },
                belt: {
                    beltName: this.state.beltName,
                    beltIlvl: this.state.beltIlvl,
                },
                pants: {
                    pantsName: this.state.pantsName,
                    pantsIlvl: this.state.pantsIlvl,
                },
                shoes: {
                    shoesName: this.state.shoesName,
                    shoesIlvl: this.state.shoesIlvl,
                },
                earring: {
                    earringName: this.state.earringName,
                    earringIlvl: this.state.earringIlvl,
                },
                necklace: {
                    necklaceName: this.state.necklaceName,
                    necklaceIlvl: this.state.necklaceIlvl,
                },
                wrist: {
                    wristName: this.state.wristName,
                    wristIlvl: this.state.wristIlvl,
                },
                ring1: {
                    ring1Name: this.state.ring1Name,
                    ring1Ilvl: this.state.ring1Ilvl,
                },
                ring2: {
                    ring2Name: this.state.ring2Name,
                    ring2Ilvl: this.state.ring2Ilvl
                }
            }
            // weaponName: this.state.weaponName,
            // weaponIlvl: this.state.weaponIlvl,
            // offHandName: this.state.offHandName,
            // offHandIlvl: this.state.offHandIlvl,
            // headName: this.state.headName,
            // headIlvl: this.state.headIlvl,
            // chestName: this.state.chestName,
            // chestIlvl: this.state.chestIlvl,
            // armsName: this.state.armsName,
            // armsIlvl: this.state.armsIlvl,
            // beltName: this.state.beltName,
            // beltIlvl: this.state.beltIlvl,
            // pantsName: this.state.pantsName,
            // pantsIlvl: this.state.pantsIlvl,
            // shoesName: this.state.shoesName,
            // shoesIlvl: this.state.shoesIlvl,
            // earringName: this.state.earringName,
            // earringIlvl: this.state.earringIlvl,
            // necklaceName: this.state.necklaceName,
            // necklaceIlvl: this.state.necklaceIlvl,
            // wristName: this.state.wristName,
            // wristIlvl: this.state.wristIlvl,
            // ring1Name: this.state.ring1Name,
            // ring1Ilvl: this.state.ring1Ilvl,
            // ring2Name: this.state.ring2Name,
            // ring2Ilvl: this.state.ring2Ilvl
        })
    }
    

    retrieveProfile = () => {
        const token = localStorage.getItem('accessToken')
        axios.get('/api/user/profile', {'headers': { token: token }})
            .then((response) => {
                console.log(response.data)
                console.log(response.data)
                this.setState({data: response.data});
                this.setState({
                    email: response.data.email,
                    // email: this.state.data.email,
                    // data.email,
                    characterName: response.data.characterName,
                    characterJob: response.data.characterJob,
                    weaponName: response.data.gear.weapon.weaponName,
                    weaponIlvl: response.data.gear.weapon.weaponIlvl,
                    offHandName: response.data.gear.offHand.offHandName,
                    offHandIlvl: response.data.gear.offHand.offHandIlvl,
                    headName: response.data.gear.head.headName,
                    headIlvl: response.data.gear.head.headIlvl,
                    chestName: response.data.gear.chest.chestName,
                    chestIlvl: response.data.gear.chest.chestIlvl,
                    armsName: response.data.gear.arms.armsName,
                    armsIlvl: response.data.gear.arms.armsIlvl,
                    beltName: response.data.gear.belt.beltName,
                    beltIlvl: response.data.gear.belt.beltIlvl,
                    pantsName: response.data.gear.pants.pantsName,
                    pantsIlvl: response.data.gear.pants.pantsIlvl,
                    shoesName: response.data.gear.shoes.shoesName,
                    shoesIlvl: response.data.gear.shoes.shoesIlvl,
                    earringName: response.data.gear.earring.earringName,
                    earringIlvl: response.data.gear.earring.earringIlvl,
                    necklaceName: response.data.gear.necklace.necklaceName,
                    necklaceIlvl: response.data.gear.necklace.necklaceIlvl,
                    wristName: response.data.gear.wrist.wristName,
                    wristIlvl: response.data.gear.wrist.wristIlvl,
                    ring1Name: response.data.gear.ring1.ring1Name,
                    ring1Ilvl: response.data.gear.ring1.ring1Ilvl,
                    ring2Name: response.data.gear.ring2.ring2Name,
                    ring2Ilvl: response.data.gear.ring2.ring2Ilvl

                })
            })
            .catch((err) => console.log(err))
    }

    componentDidMount(){
        this.retrieveProfile();
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }
    

    render(){
        var formStyle = {
            marginTop: '50px'
        }

        var buttonStyle = {
            width: '1000px'
        }
        return(
            <div>
                <Grid container spacing={3}  >
                <form style={formStyle}>
                <Grid item lg={6}>
                <TextField
                    id="outlined-helperText"
                    label="Email"
                    name='email'
                    // defaultValue={this.state.email}
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    helperText="Change your email here"
                    variant="outlined"
                    />
                </Grid>
                <Grid item lg={6}>
                <TextField
                    id="outlined-helperText"
                    label="Character Name"
                    name='characterName'
                    // defaultValue={this.state.email}
                    value={this.state.characterName}
                    onChange={this.handleInputChange}
                    helperText="Change your character name here"
                    variant="outlined"
                    />
                </Grid>
                <Grid item lg={6}>
                <TextField
                    id="outlined-helperText"
                    label="Job"
                    name='characterJob'
                    // defaultValue={this.state.email}
                    value={this.state.characterJob}
                    onChange={this.handleInputChange}
                    helperText="Change your job here"
                    variant="outlined"
                    />
                </Grid>
                <Grid item lg={6}>
                <TextField
                    id="outlined-helperText"
                    label="Weapon Name"
                    name='weaponName'
                    // defaultValue={this.state.email}
                    value={this.state.weaponName}
                    onChange={this.handleInputChange}
                    helperText="Change your weapon name here"
                    variant="outlined"
                    />
                </Grid>
                <Grid item lg={6}>
                <TextField
                    id="outlined-helperText"
                    label="weaponIlvl"
                    name='weaponIlvl'
                    // defaultValue={this.state.email}
                    value={this.state.weaponIlvl}
                    onChange={this.handleInputChange}
                    helperText="Change your weapon item level here"
                    variant="outlined"
                    />
                </Grid>
                <Grid item lg={6}>
                <TextField
                    id="outlined-helperText"
                    label="offHandName"
                    name='offHandName'
                    // defaultValue={this.state.email}
                    value={this.state.offHandName}
                    onChange={this.handleInputChange}
                    helperText="Change your offhand name here"
                    variant="outlined"
                    />
                </Grid>
                <Grid item lg={6}>
                <TextField
                    id="outlined-helperText"
                    label="offHandIlvl"
                    name='offHandIlvl'
                    // defaultValue={this.state.email}
                    value={this.state.offHandIlvl}
                    onChange={this.handleInputChange}
                    helperText="Change your offhand item level here"
                    variant="outlined"
                    />
                </Grid>
                <Grid item lg={6}>
                <TextField
                    id="outlined-helperText"
                    label="headName"
                    name='headName'
                    // defaultValue={this.state.email}
                    value={this.state.headName}
                    onChange={this.handleInputChange}
                    helperText="Change your head piece name here"
                    variant="outlined"
                    />
                </Grid>
                <Grid item lg={6}>
                <TextField
                    id="outlined-helperText"
                    label="headIlvl"
                    name='headIlvl'
                    // defaultValue={this.state.email}
                    value={this.state.headIlvl}
                    onChange={this.handleInputChange}
                    helperText="Change your head piece ilvl here"
                    variant="outlined"
                    />
                </Grid>
                <Grid item lg={6}>
                <TextField
                    id="outlined-helperText"
                    label="chestName"
                    name='chestName'
                    // defaultValue={this.state.email}
                    value={this.state.chestName}
                    onChange={this.handleInputChange}
                    helperText="Change your chest piece name here"
                    variant="outlined"
                    />
                </Grid>
                <Grid item lg={6}>
                <TextField
                    id="outlined-helperText"
                    label="chestIlvl"
                    name='chestIlvl'
                    // defaultValue={this.state.email}
                    value={this.state.chestIlvl}
                    onChange={this.handleInputChange}
                    helperText="Change your chest piece ilvl here"
                    variant="outlined"
                    />
                </Grid>
                <Grid item lg={6}>
                <TextField
                    id="outlined-helperText"
                    label="armsName"
                    name='armsName'
                    // defaultValue={this.state.email}
                    value={this.state.armsName}
                    onChange={this.handleInputChange}
                    helperText="Change your arm piece name here"
                    variant="outlined"
                    />
                </Grid>
                <Grid item lg={6}>
                <TextField
                    id="outlined-helperText"
                    label="armsIlvl"
                    name='armsIlvl'
                    // defaultValue={this.state.email}
                    value={this.state.armsIlvl}
                    onChange={this.handleInputChange}
                    helperText="Change your arm piece ilvl here"
                    variant="outlined"
                    />
                </Grid>
                <Grid item lg={6}>
                <TextField
                    id="outlined-helperText"
                    label="beltName"
                    name='beltName'
                    // defaultValue={this.state.email}
                    value={this.state.beltName}
                    onChange={this.handleInputChange}
                    helperText="Change your belt piece name here"
                    variant="outlined"
                    />
                </Grid>
                <Grid item lg={6}>
                <TextField
                    id="outlined-helperText"
                    label="beltIlvl"
                    name='beltIlvl'
                    // defaultValue={this.state.email}
                    value={this.state.beltIlvl}
                    onChange={this.handleInputChange}
                    helperText="Change your belt piece ilvl here"
                    variant="outlined"
                    />
                </Grid>
                <Grid item lg={6}>
                <TextField
                    id="outlined-helperText"
                    label="pantsName"
                    name='pantsName'
                    // defaultValue={this.state.email}
                    value={this.state.pantsName}
                    onChange={this.handleInputChange}
                    helperText="Change your pants piece name here"
                    variant="outlined"
                    />
                </Grid>
                <Grid item lg={6}>
                <TextField
                    id="outlined-helperText"
                    label="pantsIlvl"
                    name='pantsIlvl'
                    // defaultValue={this.state.email}
                    value={this.state.pantsIlvl}
                    onChange={this.handleInputChange}
                    helperText="Change your pants piece ilvl here"
                    variant="outlined"
                    />
                </Grid>
                <Grid item lg={6}>
                <TextField
                    id="outlined-helperText"
                    label="shoesName"
                    name='shoesName'
                    // defaultValue={this.state.email}
                    value={this.state.shoesName}
                    onChange={this.handleInputChange}
                    helperText="Change your shoes piece name here"
                    variant="outlined"
                    />
                </Grid>
                <Grid item lg={6}>
                <TextField
                    id="outlined-helperText"
                    label="shoesIlvl"
                    name='shoesIlvl'
                    // defaultValue={this.state.email}
                    value={this.state.shoesIlvl}
                    onChange={this.handleInputChange}
                    helperText="Change your shoes piece ilvl here"
                    variant="outlined"
                    />
                </Grid>
                <Grid item lg={6}>
                <TextField
                    id="outlined-helperText"
                    label="earringName"
                    name='earringName'
                    // defaultValue={this.state.email}
                    value={this.state.earringName}
                    onChange={this.handleInputChange}
                    helperText="Change your earring piece name here"
                    variant="outlined"
                    />
                </Grid>
                <Grid item lg={6}>
                <TextField
                    id="outlined-helperText"
                    label="earringIlvl"
                    name='earringIlvl'
                    // defaultValue={this.state.email}
                    value={this.state.earringIlvl}
                    onChange={this.handleInputChange}
                    helperText="Change your earring piece ilvl here"
                    variant="outlined"
                    />
                </Grid>
                <Grid item lg={6}>
                <TextField
                    id="outlined-helperText"
                    label="necklaceName"
                    name='necklaceName'
                    // defaultValue={this.state.email}
                    value={this.state.necklaceName}
                    onChange={this.handleInputChange}
                    helperText="Change your necklace piece name here"
                    variant="outlined"
                    />
                </Grid>
                <Grid item lg={6}>
                <TextField
                    id="outlined-helperText"
                    label="necklaceIlvl"
                    name='necklaceIlvl'
                    // defaultValue={this.state.email}
                    value={this.state.necklaceIlvl}
                    onChange={this.handleInputChange}
                    helperText="Change your necklace piece ilvl here"
                    variant="outlined"
                    />
                </Grid>
                <Grid item lg={6}>
                <TextField
                    id="outlined-helperText"
                    label="wristName"
                    name='wristName'
                    // defaultValue={this.state.email}
                    value={this.state.wristName}
                    onChange={this.handleInputChange}
                    helperText="Change your wrist piece name here"
                    variant="outlined"
                    />
                </Grid>
                <Grid item lg={6}>
                <TextField
                    id="outlined-helperText"
                    label="wristIlvl"
                    name='wristIlvl'
                    // defaultValue={this.state.email}
                    value={this.state.wristIlvl}
                    onChange={this.handleInputChange}
                    helperText="Change your wrist piece ilvl here"
                    variant="outlined"
                    />
                </Grid>
                <Grid item lg={6}>
                <TextField
                    id="outlined-helperText"
                    label="ring1Name"
                    name='ring1Name'
                    // defaultValue={this.state.email}
                    value={this.state.ring1Name}
                    onChange={this.handleInputChange}
                    helperText="Change your 1st ring piece name here"
                    variant="outlined"
                    />
                </Grid>
                <Grid item lg={6}>
                <TextField
                    id="outlined-helperText"
                    label="ring1Ilvl"
                    name='ring1Ilvl'
                    // defaultValue={this.state.email}
                    value={this.state.ring1Ilvl}
                    onChange={this.handleInputChange}
                    helperText="Change your 1st ring piece ilvl here"
                    variant="outlined"
                    />
                </Grid>
                <Grid item lg={6}>
                <TextField
                    id="outlined-helperText"
                    label="ring2Name"
                    name='ring2Name'
                    // defaultValue={this.state.email}
                    value={this.state.ring2Name}
                    onChange={this.handleInputChange}
                    helperText="Change your 2nd ring piece name here"
                    variant="outlined"
                    />
                </Grid>
                <Grid item lg={6}>
                <TextField
                    id="outlined-helperText"
                    label="ring2Ilvl"
                    name='ring2Ilvl'
                    // defaultValue={this.state.email}
                    value={this.state.ring2Ilvl}
                    onChange={this.handleInputChange}
                    helperText="Change your 2nd ring piece ilvl here"
                    variant="outlined"
                    />
                </Grid>
                <Grid item lg={12}>
                <Button button style={buttonStyle} color="primary" onClick={this.handleSubmit} >Submit</Button>
                </Grid>
                </form>
                </Grid>
            </div>
        )
    }
}

export default Profile;