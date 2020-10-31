import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/User.action';
import { selectCurrentUser } from './redux/user/User.selector';
import { createStructuredSelector } from 'reselect';
import Header from './components/header.component/Header.component';
import SignInAndSignUp from './pages/sign.in-sign.up-page/Sing.in.Sign.up';
import HomePage from './pages/home-page/Home.page';
import ShopPage from './pages/shop-page/Shop-page';
import CheckoutPage from './pages/checkout-page/Checkout.page.jsx';
import { auth, createUserDoc } from './firebase/Firebase.utils';
class App extends React.Component {
  unsubscribetionAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribetionAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserDoc(user);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(user);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribetionAuth();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatchEvent) => ({
  setCurrentUser: (user) => dispatchEvent(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
