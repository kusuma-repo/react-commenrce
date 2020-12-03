import { CustomButtonContainer } from './Custom-button.styles';
const CustomButton = ({ children, isGoogleSigIn, inverted, ...otherProps }) => (
  <CustomButtonContainer
    className={`${inverted ? 'inverted' : ''}
    ${isGoogleSigIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </CustomButtonContainer>
);
export default CustomButton;
