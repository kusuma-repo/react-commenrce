import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header.component/Header.component';
import SignInAndSignUp from './pages/sign.in-sign.up-page/Sing.in.Sign.up';
import HomePage from './pages/home-page/Home.page';
import ShopPage from './pages/shop-page/Shop-page';
import { auth, createUserDoc } from './firebase/Firebase.utils';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribetionAuth = null;
  componentDidMount() {
    this.unsubscribetionAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserDoc(user);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: user });
      }
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
