import React, { Component, Profiler } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';


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
        return(
            <div>
                <Grid container spacing={3}  >
                <form style={formStyle}>
                <Grid item md={6}>
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
                <Grid item md={6}>
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
                <Grid item md={6}>
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
                </form>
                </Grid>
            </div>
        )
    }
}

export default Profile;