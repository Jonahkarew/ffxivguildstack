import React, { Component } from 'react'
import RegisterForm from '../Components/RegisterForm/RegisterForm'

class Register extends Component {
    state={
        email: "",
        password: ""
    }

    handleEmailChange = (event) => {
        this.child.setState({email: event.target.value})
    }


    render() {
        return (
            <div>
                <RegisterForm />
            </div>
        )
    }
}

export default Register
