import axios from 'axios'
import React, { useState } from 'react'
import todoLogo from '../assests/TodoLogo.svg'

export default function Register() {

    const [userCredentials, setUserCredentials] = useState({ username: '', password: '' })

    const handleInputsChange = (event) => {
        userCredentials[event.target.name] = event.target.value;
        setUserCredentials({ ...userCredentials })
        console.log(userCredentials)
    }

    const login = () => {
        axios.post(`http://20.228.231.174/api/todoUser/create`, userCredentials)
            .then(response => {
                console.log(response.data)
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login();
    }

    return (
        <div className='container' onSubmit={handleSubmit}>
            <form className='form-container'>
                <img src={todoLogo} className='brand-logo' />
                <div className='brand-title'>Register</div>
                <div className='inputs'>
                    <label className='label'>Username</label>
                    <input autoComplete="new-password" type='text' name='username' onChange={handleInputsChange} value={userCredentials.username} placeholder='Username' />
                    <label className='label'>Password</label>
                    <input autoComplete="new-password" type='password' name='password' placeholder='Password' onChange={handleInputsChange} value={userCredentials.password} />
                    <input type='submit' className='submit-button' />
                </div>
            </form>
        </div>
    )
}
