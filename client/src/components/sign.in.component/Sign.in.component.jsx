import React, { useState } from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/Custom.button.component';
import FormInput from '../formInput.component/Form.input.component';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/User.action';

import './Sign.in.component.styles.scss';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;
  const handleSubmit = async (e) => {
    e.preventDefault();
    emailSignInStart(email, password);
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I Already have account</h2>
      <span>SignIn with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          required
          label="email"
          handleChange={handleChange}
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          required
          label="password"
          handleChange={handleChange}
        />
        <div className="button">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={googleSignInStart} isGoogleSigIn>
            SignIn With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
