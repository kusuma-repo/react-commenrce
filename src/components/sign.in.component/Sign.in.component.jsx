import React from 'react';

import CustomButton from '../custom-button/Custom.button.component';
import FormInput from '../formInput.component/Form.input.component';
import { auth, signInWithGoogle } from '../../firebase/Firebase.utils';

import './Sign.in.component.styles.scss';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
      alert('succesful sign in');
    } catch (error) {
      console.error(error);
    }
  };
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I Already have account</h2>
        <span>SignIn with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={email}
            required
            label="email"
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            required
            label="password"
            handleChange={this.handleChange}
          />
          <div className="button">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSigIn
            >
              SignIn With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
