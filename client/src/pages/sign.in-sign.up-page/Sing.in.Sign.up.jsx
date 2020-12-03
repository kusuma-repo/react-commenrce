import { SignInAndSignUpContainer } from './Sing.in.Sign.up.styles';

import SignIn from '../../components/sign.in.component/Sign.in.component';
import SignUp from '../../components/sign.up.component/Sign.up.component';
const SignInAndSignUp = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUp;
