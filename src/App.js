import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Orders from './containers/order/Order';
import Products from './containers/product/Product';
import NotFound from './containers/error/NotFound';
import productEdit from './containers/product/ProductEdit'

class App extends Component {

  renderRouter() {
    return(
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/add" component={productEdit} />
        <Route exact path="/products/edit/:id" component={productEdit} />

        <Route component={NotFound}/>
      </Switch>
    )
  }

  render() {
    return (
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    )
  }
}

export default App;
