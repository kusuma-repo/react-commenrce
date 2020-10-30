import './Cart.dropdown.styles.scss';
import CustomButton from '../custom-button/Custom.button.component';
import CartItem from '../cart.item.component/Cart.item.component';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <CartItem />
      <CustomButton />
    </div>
  </div>
);

export default CartDropdown;
