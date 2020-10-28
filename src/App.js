import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header.component/Header.component';
import HomePage from './pages/home-page/Home.page';
import ShopPage from './pages/shop-page/Shop-page';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
