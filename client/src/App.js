import React, { useEffect, lazy, Suspense } from 'react';
import { GlobalStyle } from './global.styles';

import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/User.selector';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/User.action';

import SpinnerLoading from './components/spinner.component/Spinner.component';
import Header from './components/header.component/Header.component';
import ErrorBoundary from './components/error.boundaries.componnet/Error.component';

const HomePage = lazy(() => import('./pages/home-page/Home.page'));
const ShopPage = lazy(() => import('./pages/shop-page/Shop-page'));
const CheckoutPage = lazy(() =>
  import('./pages/checkout-page/Checkout.page.jsx')
);
const SignInAndSignUp = lazy(() =>
  import('./pages/sign.in-sign.up-page/Sing.in.Sign.up')
);
const ContactForm = lazy(() =>
  import('./components/contact.component/Contact.component')
);
//import CheckoutExp from './components/checkout-exp/Checkout';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<SpinnerLoading />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/contact" component={ContactForm} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/sign"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispacthToProps = (dispatchEvent) => ({
  checkUserSession: () => dispatchEvent(checkUserSession()),
});

export default connect(mapStateToProps, mapDispacthToProps)(App);
