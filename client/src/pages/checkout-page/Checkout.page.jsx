import './Checkout.page.styles';
//import CheckOutItem from '../../components/checkout.component/Checkout.component';
import CheckoutExp from '../../components/checkout-exp/Checkout';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  CheckoutPageContainer,
  ShopCartHeader,
  HeaderBlock,
  TotalContainer,
  WarningContainer,
  LabelDetails,
  LabelImage,
  LabelPrice,
  LabelQuantity,
  LabelRemoval,
  LabelTotalPrice,
} from './Checkout.page.styles';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/Cart.selector';
import StripeCheckoutButton from '../../components/stripe.chekout.component/Stripe.button.component';
const CheckoutPage = ({ cartItems, cartTotal }) => {
  return (
    <CheckoutPageContainer>
      <ShopCartHeader>
        {cartTotal ? (
          <HeaderBlock>
            <LabelImage>Product </LabelImage>
            <LabelDetails> Description</LabelDetails>
            <LabelPrice>Price</LabelPrice>
            <LabelQuantity>Quantity </LabelQuantity>
            <LabelRemoval> Remove</LabelRemoval>
            <LabelTotalPrice> Total</LabelTotalPrice>
          </HeaderBlock>
        ) : (
          <div>Cart Empty</div>
        )}
        {cartItems.map((cartItem) => (
          <CheckoutExp key={cartItem.id} cartItems={cartItem} />
        ))}
      </ShopCartHeader>
      <TotalContainer>
        <span>SUBTOTAL: $ {cartTotal} </span>
      </TotalContainer>
      <WarningContainer>
        *please use the following test credit card*
        <br />
        4242 4242 4242 4242--- exp:01/20 --- CW:123
      </WarningContainer>
      <StripeCheckoutButton price={cartTotal} />
    </CheckoutPageContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
