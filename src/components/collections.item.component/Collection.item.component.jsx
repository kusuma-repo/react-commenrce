import './Collection.item.scss';
import CustomButton from '../custom-button/Custom.button.component';
import { addCartItems } from '../../redux/cart/Cart.action';
import { connect } from 'react-redux';
const CollectionItem = ({ item, addItemToCart }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItemToCart(item)}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};
const mapDispatchToProps = (dispatchEvent) => ({
  addItemToCart: (item) => dispatchEvent(addCartItems(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
