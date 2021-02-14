import React, { Component } from 'react';
import './App.css';
// import Checkout from './Components/CheckoutSummary/CheckoutSummary';
import Layout from './Components/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilderFolder/BurgerBuilder';
import CheckoutPanel from './Containers/CheckoutPanel/CheckoutPanel';
import { Route, Switch } from 'react-router-dom';
import Orders from './Containers/Orders/Orders';


class App extends Component {
 

  render() {
    return (
      <div >
        <Layout>
          <Switch>
          <Route path="/checkout" component={CheckoutPanel} />
          <Route path="/orders" component={Orders} />
          <Route path="/" exact component={BurgerBuilder} />

          </Switch>
          
          {/* <BurgerBuilder /> */}
          {/* <CheckoutPanel /> */}
        </Layout>
      </div>
    );
  }
}

export default App;
