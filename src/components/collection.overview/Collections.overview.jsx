import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionForOverview } from '../../redux/collections/Shop.selector';
import CollectionPreview from '../collection.preview.component/Collection.preview.component';

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForOverview,
});

export default connect(mapStateToProps)(CollectionOverview);
