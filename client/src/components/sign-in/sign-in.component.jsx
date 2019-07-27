// UNFINISHED GOOGLE LOGIN BUTTON
import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SignInContainer, SignInTitle, ButtonsBarContainer } from './sign-in.styles.jsx';

import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';

const SignIn = ( { emailSignInStart,  googleSignInStart  }) => {
    const [userCredentials, setCredentials] = useState ({ email: '', password: ''}) // initial state

    const { email, password } = userCredentials
    const handleSubmit = async e => {
        e.preventDefault();
        
        emailSignInStart(email, password);
    };
    const handleChange = e => {
        const { value, name } = e.target; // destructure, this saves us from writing e.target.value and etc.
        setCredentials({ ...userCredentials, [name]: value })
    };
    return (
        <SignInContainer>
            <SignInTitle> Already have an account ? </SignInTitle>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput name='email' type='email' value={email} handleChange={handleChange} label="Email" required />

                <FormInput name='password' type='password' value={password} handleChange={handleChange} label="Password" required />

                <ButtonsBarContainer>
                    <CustomButton type="submit"> LOGIN </CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
                        GOOGLE LOGIN
                    </CustomButton>
                </ButtonsBarContainer>
            </form>
        </SignInContainer>
    )
};
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})
export default connect(null, mapDispatchToProps)(SignIn);