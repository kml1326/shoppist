import React, { useState, useEffect } from "react";
import "../scss/index.scss";
import { connect } from "react-redux";


function Dashboard(props) {

  return (
    <div className="app">
        Dashboard
    </div>
  );
}

function mapStateToProps() {
  return {
    cartItems: (state) => state.cartItems
  };
}

export default connect(mapStateToProps)(Dashboard);