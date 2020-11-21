import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchCollectionStart } from '../../redux/collections/Shop.action';

import CollectionOverviewContainer from '../../components/collection.overview/Collection.overview.container';
import CollectionPageContainer from '../collection-page/Collection.page.container';

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};
const mapDispatchToprops = (dispatchEvent) => ({
  fetchCollectionsStart: () => dispatchEvent(fetchCollectionStart()),
});

export default connect(null, mapDispatchToprops)(ShopPage);
