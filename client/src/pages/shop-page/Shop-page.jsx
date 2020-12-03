import React, { lazy, useEffect, Suspense } from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchCollectionStart } from '../../redux/collections/Shop.action';

import SpinnerLoading from '../../components/spinner.component/Spinner.component';

const CollectionOverviewContainer = lazy(() =>
  import('../../components/collection.overview/Collection.overview.container')
);
const CollectionPageContainer = lazy(() =>
  import('../collection-page/Collection.page.container')
);

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={<SpinnerLoading />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};
const mapDispatchToprops = (dispatchEvent) => ({
  fetchCollectionsStart: () => dispatchEvent(fetchCollectionStart()),
});

export default connect(null, mapDispatchToprops)(ShopPage);
