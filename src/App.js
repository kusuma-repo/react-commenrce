import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header.component/Header.component';
import SignInAndSignUp from './pages/sign.in-sign.up-page/Sing.in.Sign.up';
import HomePage from './pages/home-page/Home.page';
import ShopPage from './pages/shop-page/Shop-page';
import { auth } from './firebase/Firebase.utils';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribetionAuth = null;
  componentDidMount() {
    this.unsubscribetionAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribetionAuth();
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
