import './Collection.page.styles.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/collections/Shop.selector';
import CollectionItem from '../../components/collections.item.component/Collection.item.component';
const CollectionPage = ({ collection, match }) => {
  console.log(match);
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
