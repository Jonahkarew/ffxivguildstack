import React, { Component, Profiler } from 'react';
import axios from 'axios';

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
        }
    

    retrieveProfile = () => {
        const token = localStorage.getItem('accessToken')
        axios.get('/api/user/profile', {'headers': { token: token }})
            .then((response) => {
                console.log(response.data)
                this.setState({data: response.data});
                this.setState({
                    email: response.data.email,
                    email: this.state.data.email,
                    // data.email,
                    characterName: response.data.characterName,
                    characterJob: response.data.characterJob,
                    weaponName: response.data.gear.weapon.weaponName,
                    weaponIlvl: response.data.gear.weapon.weaponIlvl
                })
            })
            .catch((err) => console.log(err))
    }

    componentDidMount(){
        this.retrieveProfile();
    }



    render(){
        return(
            <div>
                <p>something here</p>
            </div>
        )
    }
}

export default Profile;