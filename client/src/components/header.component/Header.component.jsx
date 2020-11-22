import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { signOutStart } from '../../redux/user/User.action';
import { selectCartHidden } from '../../redux/cart/Cart.selector';
import { selectCurrentUser } from '../../redux/user/User.selector';

import CartDropdown from '../cart.dropdown.component/Cart.dropdown.component';
import CartIcon from '../cart.component/Cart.icon.component';

import './Header.component.styes.scss';
const Header = ({ setcurrentUser, hidden, signOutStart }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {setcurrentUser ? (
          <div className="option" onClick={signOutStart}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/sign">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
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
