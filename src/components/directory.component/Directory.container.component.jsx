import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { sellectDirectoryIsFetching } from '../../redux/directory/Directory.selector';

import DirectoryMenu from './Directory.component';
import LoadingSpinner from '../loading.component/loading.spiner.component';

const mapStateToProps = createStructuredSelector({
  isLoading: sellectDirectoryIsFetching,
});

const DirectoryContainer = compose(
  connect(mapStateToProps),
  LoadingSpinner
)(DirectoryMenu);

export default DirectoryContainer;
