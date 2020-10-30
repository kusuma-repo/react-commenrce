import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/User.action';

import Header from './components/header.component/Header.component';
import SignInAndSignUp from './pages/sign.in-sign.up-page/Sing.in.Sign.up';
import HomePage from './pages/home-page/Home.page';
import ShopPage from './pages/shop-page/Shop-page';
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
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatchEvent) => ({
  setCurrentUser: (user) => dispatchEvent(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
