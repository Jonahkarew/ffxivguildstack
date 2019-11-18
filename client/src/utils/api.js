import axios from 'axios';


const getMemberProfile = () => {
    return axios.get('/profile')
};

const register = memberData => {
    return axios.post('/register', memberData)
};

const login = memberData => {
    return axios.post('/login', memberData)
};

const updateProfile = memberData => {
    return axios.put('/update/', memberData)
}




export default {
    getMemberProfile,
    register,
    login,
    updateProfile
}