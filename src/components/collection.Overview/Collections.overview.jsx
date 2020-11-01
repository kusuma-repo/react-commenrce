import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsItem } from '../../redux/collections/Shop.selector';
import CollectionPreview from '../collection.preview.component/Collection.preview.component';

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsItem,
});

export default connect(mapStateToProps)(CollectionOverview);
