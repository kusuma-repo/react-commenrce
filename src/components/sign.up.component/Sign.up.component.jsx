import React from 'react';
import { connect } from 'react-redux';
import { auth, createUserDoc } from '../../firebase/Firebase.utils';

import { signUpStart } from '../../redux/user/User.action';

import FormInput from '../formInput.component/Form.input.component';
import CustomButton from '../custom-button/Custom.button.component';
import './Sign.up.component.scss';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { onSignUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert('password does not match');
      return;
    }
    onSignUpStart({ displayName, email, password });
  };
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have account</h2>
        <span>Sign Up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            value={displayName}
            required
            label="username"
            handleChange={this.handleChange}
          />
          <FormInput
            name="email"
            type="email"
            value={email}
            required
            label="email"
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            required
            label="password"
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            required
            label="Confirm password"
            handleChange={this.handleChange}
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatchEvent) => ({
  onSignUpStart: (userCredentials) =>
    dispatchEvent(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
