import {
  HeaderContainer,
  LogoContainer,
  OptionContainer,
  OptionLink,
} from './Header.styles';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { signOutStart } from '../../redux/user/User.action';
import { selectCartHidden } from '../../redux/cart/Cart.selector';
import { selectCurrentUser } from '../../redux/user/User.selector';

import CartDropdown from '../cart.dropdown.component/Cart.dropdown.component';
import CartIcon from '../cart.component/Cart.icon.component';

const Header = ({ setcurrentUser, hidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {setcurrentUser ? (
          <div className="option" onClick={signOutStart}>
            SIGN OUT
          </div>
        ) : (
          <OptionLink to="/sign">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  setcurrentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatchEvent) => ({
  signOutStart: () => dispatchEvent(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
