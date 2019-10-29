import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import { Content } from "native-base";
import actions from "../../redux/actions";

export class LoginPage extends Component {
  static navigationOptions = {
    title: "Login"
  };

  onSignIn = values => {
    console.log(values);
    this.props.startSignIn(
      this.props.navigation,
      values.username,
      values.password
    );
  };

  render() {
    return (
      <Content padder>
        <LoginForm onSubmit={this.onSignIn} />
      </Content>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    startSignIn: (navigation, username, password) =>
      actions.startSignIn(dispatch, navigation, username, password)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
