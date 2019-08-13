import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import actions from "../actions";

class Logout extends Component {
  componentDidMount() {
    this.props.onLogout();
  }

  render() {
    return <Redirect to="/" />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout())
  };
};

const connectedLogout = connect(
  null,
  mapDispatchToProps
)(Logout);

export { connectedLogout as Logout };
