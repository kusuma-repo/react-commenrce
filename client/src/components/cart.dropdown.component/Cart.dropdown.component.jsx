import CartItem from '../cart.item.component/Cart.item.component';
import {
  CartDropdownContainer,
  CartItemContainer,
  EmptyMessageContainer,
  CartDropdownButton,
} from './Cart.dropdown.style';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/Cart.action';
import { selectCartItems } from '../../redux/cart/Cart.selector';

const CartDropdown = ({ CartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemContainer>
      {CartItems.length ? (
        CartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer> Your Cart Is Empty</EmptyMessageContainer>
      )}

      <CartDropdownButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartItemContainer>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  CartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
