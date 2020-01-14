import React, { useEffect } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
// import {  } from "./actions/actions";
import { connect } from "react-redux";
import Dashboard from "./components/Dashboard";
import "./scss/index.scss";

function App(props) {
  var state = {};

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          {/* <Route path="/view-cart" component={} /> */}
          {/* <Route path="/single-product-details" component={} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

function mapStateToProps(state) {
  return {
    cartItems: state ? state.cartItems : state
  };
}


export default connect(mapStateToProps)(App);