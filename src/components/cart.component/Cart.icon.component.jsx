import './Cart.icon.styles.scss';
import { ReactComponent as ShopingBag } from '../../assets/shopping-bag.svg';

const CartIcon = () => (
  <div className="cart-icon">
    <ShopingBag className="shopping-icon" />
    <span className="item-count"></span>
  </div>
);

export default CartIcon;
