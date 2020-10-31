import './Cart.dropdown.styles.scss';
import CustomButton from '../custom-button/Custom.button.component';
import CartItem from '../cart.item.component/Cart.item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
//import { toggleCartHidden } from '../../redux/cart/Cart.action';
import { selectCartItems } from '../../redux/cart/Cart.selector';

const CartDropdown = ({ CartItems, dispatchEvent }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {CartItems.length ? (
        CartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message"> Your Cart Is Empty</span>
      )}

      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  CartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
