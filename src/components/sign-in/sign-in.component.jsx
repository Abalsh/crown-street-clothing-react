// UNFINISHED GOOGLE LOGIN BUTTON
import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {SignInContainer, SignInTitle, ButtonsBarContainer} from './sign-in.styles.jsx';

import {emailSignInStart, googleSignInStart} from '../../redux/user/user.actions';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {emailSignInStart} = this.props
        const {email, password} = this.state // destructure

        emailSignInStart(email, password);
    };
    handleChange = e => {
        const { value, name } = e.target; // destructure, this saves us from writing e.target.value and etc.
        this.setState({ [name]: value })
    };

    render() {
        const { email, password } = this.state;
        const { googleSignInStart } = this.props;
        return (
            <SignInContainer>
                <SignInTitle> Already have an account ? </SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={email} handleChange={this.handleChange} label="Email" required />
            
                    <FormInput name='password' type='password' value={password} handleChange={this.handleChange} label="Password" required />
                    
                    <ButtonsBarContainer>
                    <CustomButton type="submit"> LOGIN </CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn> 
                    GOOGLE LOGIN
                    </CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        )
    }
};
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password}))
})
export default connect(null, mapDispatchToProps)(SignIn);