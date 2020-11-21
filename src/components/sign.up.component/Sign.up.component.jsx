import React, { useState } from 'react';
import { connect } from 'react-redux';

import { signUpStart } from '../../redux/user/User.action';

import FormInput from '../formInput.component/Form.input.component';
import CustomButton from '../custom-button/Custom.button.component';
import './Sign.up.component.scss';

const SignUp = ({ onSignUpStart }) => {
  const [state, setstate] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { displayName, email, password, confirmPassword } = state;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('password does not match');
      return;
    }
    onSignUpStart({ displayName, email, password });
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setstate({ ...state, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have account</h2>
      <span>Sign Up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          value={displayName}
          required
          label="username"
          handleChange={handleChange}
        />
        <FormInput
          name="email"
          type="email"
          value={email}
          required
          label="email"
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          required
          label="password"
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required
          label="Confirm password"
          handleChange={handleChange}
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatchEvent) => ({
  onSignUpStart: (userCredentials) =>
    dispatchEvent(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
