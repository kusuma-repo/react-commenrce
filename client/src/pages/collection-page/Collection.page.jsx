import { connect } from 'react-redux';
import { selectCollection } from '../../redux/collections/Shop.selector';

import CollectionItem from '../../components/collections.item.component/Collection.item.component';
import {
  CollectionPageContainer,
  CollectionItemsContainer,
  CollectionTitle,
} from './Collection.page.styles';

const CollectionPage = ({ collection, match }) => {
  console.log(match);
  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
