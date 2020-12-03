import React, { useEffect } from 'react';
import { GlobalStyle } from './global.styles';

import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/User.selector';
import { createStructuredSelector } from 'reselect';

import { checkUserSession } from './redux/user/User.action';

import Header from './components/header.component/Header.component';
import SignInAndSignUp from './pages/sign.in-sign.up-page/Sing.in.Sign.up';
import HomePage from './pages/home-page/Home.page';
import ShopPage from './pages/shop-page/Shop-page';
import CheckoutPage from './pages/checkout-page/Checkout.page.jsx';
import ContactForm from './components/contact.component/Contact.component';

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
