import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { sellectCollectionIsFetching } from '../../redux/collections/Shop.selector';
import CollectionOverview from './Collections.overview';
import WithSpinner from '../loading.component/loading.spiner.component';

const mapStateToProps = createStructuredSelector({
  isLoading: sellectCollectionIsFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
