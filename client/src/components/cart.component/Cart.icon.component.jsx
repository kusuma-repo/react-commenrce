import { toggleCartHidden } from '../../redux/cart/Cart.action';
import {
  Shoppingicon,
  CartItemCount,
  CarticonContainer,
} from './Cart.icon.styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/Cart.selector';
const CartIcon = ({ toggleCart, itemCount }) => (
  <CarticonContainer onClick={toggleCart}>
    <Shoppingicon />
    <CartItemCount>{itemCount}</CartItemCount>
  </CarticonContainer>
);

const mapDispatchToprops = (dispatchEvent) => ({
  toggleCart: () => dispatchEvent(toggleCartHidden()),
});
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToprops)(CartIcon);
