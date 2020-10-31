import './Cart.icon.styles.scss';
import { ReactComponent as ShopingBag } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/Cart.action';
import { connect } from 'react-redux';
const CartIcon = ({ toggleCart }) => (
  <div className="cart-icon" onClick={toggleCart}>
    <ShopingBag className="shopping-icon" />
    <span className="item-count"></span>
  </div>
);

const mapDispatchToprops = (dispatchEvent) => ({
  toggleCart: () => dispatchEvent(toggleCartHidden()),
});

export default connect(null, mapDispatchToprops)(CartIcon);
