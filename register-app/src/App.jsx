import React, { useState, useRef } from 'react'
import FormInput from './components/FormInput.jsx'
import './App.css'

function App() {

    const values = useRef({
        username: '',
        email: '',
        birthday: '',
        password: '',
        confirmpassword: ''
    });
    const inputs = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            placeholder: 'Username',
            label: 'Username'
        },
        {
            id: 2,
            name: 'email',
            type: 'text',
            placeholder: 'Email',
            label: 'Email'
        },
        {
            id: 3,
            name: 'birthday',
            type: 'text',
            placeholder: 'Birthday',
            label: 'Birthday'
        },
        {
            id: 4,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            label: 'Password'
        },
        {
            id: 5,
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Confirm Password',
            label: 'Confirm Password'
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        console.log(Object.fromEntries(data.entries))
    }

    const onChagne = (e) => {
        const { name, value } = e.target;

        values.current[name] = value;
    }

    return (
        <div className='app'>
            <form onSubmit={handleSubmit}>
                {inputs.map((input) => {
                    return <FormInput {...input} key={input.id} onChange={onChagne}></FormInput>
                })}
                <button>Submit</button>
            </form>
        </div >
    )
}

export default App
