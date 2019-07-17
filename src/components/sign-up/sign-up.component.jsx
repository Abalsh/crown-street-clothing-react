import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.util';

import './sign-up.styles.scss';

class Signup extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='signup'>
                <h2 className='title'>Don't have an Account ?</h2>
                <span> Sign Up with your email and password </span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                    />
                  <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                    />
                </form>
            </div>
        )
    }
}