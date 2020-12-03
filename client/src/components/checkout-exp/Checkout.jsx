import { connect } from 'react-redux';

import {
  addItemsCart,
  clearItemCart,
  removeItemCart,
} from '../../redux/cart/Cart.action';

import './Checkout.scss';

const CheckoutExp = ({ cartItems, addItem, removeItem, clearItem }) => {
  console.log(cartItems);
  const { name, imageUrl, price, quantity, subtotal } = cartItems;
  return (
    <div>
      <div className="column-labels">
        {/*
        <label className="product-image">Image</label>
        <label className="product-details">Product</label>
        <label className="product-price">Price</label>
        <label className="product-quantity">Quantity</label>
        <label className="product-removal">Delete</label>
        <label className="product-line-price">Total</label>
        */}
      </div>
      <div className="product">
        <div className="product-image">
          <img src={imageUrl} alt="img" />
        </div>
        <div className="product-details">
          <div className="product-title">{name}</div>
          <p className="product-description">
            The best dog bones of all time. Holy crap. Your dog will be begging
          </p>
        </div>

        <div className="product-price">{price}</div>
        <div className="product-quantity">
          <div className="arrow" onClick={() => removeItem(cartItems)}>
            &#10094;
          </div>
          <span className="value">{quantity}</span>
          <div className="arrow" onClick={() => addItem(cartItems)}>
            &#10095;
          </div>
        </div>

        <div className="product-removal">
          <button
            className="remove-product"
            onClick={() => clearItem(cartItems)}
          >
            Remove
          </button>
        </div>
        <div className="product-line-price">{subtotal}</div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatchEvent) => ({
  addItem: (cart) => dispatchEvent(addItemsCart(cart)),
  clearItem: (cart) => dispatchEvent(clearItemCart(cart)),
  removeItem: (cart) => dispatchEvent(removeItemCart(cart)),
});

export default connect(null, mapDispatchToProps)(CheckoutExp);
