import { connect } from 'react-redux';

import {
  addItemsCart,
  clearItemCart,
  removeItemCart,
} from '../../redux/cart/Cart.action';
import './Checkout.component.styles.scss';

const CheckOutItem = ({ cartItems, addItem, removeItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItems;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name"> {name}</span>

      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItems)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItems)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItems)}>
        &#10005;
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatchEvent) => ({
  addItem: (cart) => dispatchEvent(addItemsCart(cart)),
  clearItem: (cart) => dispatchEvent(clearItemCart(cart)),
  removeItem: (cart) => dispatchEvent(removeItemCart(cart)),
});
export default connect(null, mapDispatchToProps)(CheckOutItem);
