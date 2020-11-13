import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import WithSpinner from '../../components/loading.component/loading.spiner.component';
import CollectionPage from './Collection.page';

import { selectFecthIsLoaded } from '../../redux/collections/Shop.selector';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectFecthIsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
