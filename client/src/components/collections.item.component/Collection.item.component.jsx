import {
  CollectionItemContainer,
  ImageContainer,
  CollectionFooter,
  CollectionPrice,
  CollectionName,
  AddButton,
} from './Collection.item.styles';
import { addItemsCart } from '../../redux/cart/Cart.action';
import { connect } from 'react-redux';

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, imageUrl, price } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer className="image" imageUrl={imageUrl} />
      <CollectionFooter>
        <CollectionName>{name}</CollectionName>
        <CollectionPrice>{price}</CollectionPrice>
      </CollectionFooter>
      <AddButton onClick={() => addItemToCart(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};
const mapDispatchToProps = (dispatchEvent) => ({
  addItemToCart: (item) => dispatchEvent(addItemsCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
