import './Cart.item.styles.scss';

const CartItem = () => (
  <div className="cart-item">
    <img src alt="img-cart" />
    <div className="item-details">
      <span className="name"></span>
      <span className="price"></span>
    </div>
  </div>
);

export default CartItem;
