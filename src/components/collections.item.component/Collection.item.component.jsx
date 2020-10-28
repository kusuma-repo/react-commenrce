import './Collection.item.scss';
import CustomButton from '../custom-button/Custom.button.component';
const CollectionItem = ({ item }) => {
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
      <CustomButton>ADD TO CART</CustomButton>
    </div>
  );
};

export default CollectionItem;
