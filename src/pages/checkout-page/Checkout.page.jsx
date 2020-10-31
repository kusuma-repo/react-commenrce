import './Checkout.page.styles';
import CheckOutItem from '../../components/checkout.component/Checkout.component';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlock,
  TotalContainer,
  WarningContainer,
} from './Checkout.page.styles';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/Cart.selector';
const CheckoutPage = ({ cartItems, cartTotal }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlock>
        <span>Product</span>
      </HeaderBlock>
      <HeaderBlock>
        <span> Description</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Quantity</span>
      </HeaderBlock>
      <HeaderBlock>
        <span> Price</span>
      </HeaderBlock>
      <HeaderBlock>
        <span> Remove</span>
      </HeaderBlock>
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckOutItem key={cartItem.id} cartItems={cartItem} />
    ))}
    <TotalContainer>
      <span>TOTAL: $ {cartTotal} </span>
    </TotalContainer>
    <WarningContainer>
      *please use the following test credit card*
      <br />
      4242 4242 4242 4242--- exp:01/20 --- CW:123
    </WarningContainer>
  </CheckoutPageContainer>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
