import './Cart.icon.styles.scss';
import { ReactComponent as ShopingBag } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/Cart.action';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/Cart.selector';
const CartIcon = ({ toggleCart, itemCount }) => (
  <div className="cart-icon" onClick={toggleCart}>
    <ShopingBag className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToprops = (dispatchEvent) => ({
  toggleCart: () => dispatchEvent(toggleCartHidden()),
});
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToprops)(CartIcon);
