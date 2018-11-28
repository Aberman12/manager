import React, { Component } from "react";
import { connect } from "react-redux";
import { emailChanged, passwordChanged, loginUser } from "../actions";
import { Card, CardSection, Input, Button, Spinner } from "./common";

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.onPasswordChanged(text);
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return <Button onPress={this.onButtonPress.bind(this)}>Log In </Button>;
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@email.com"
            value={this.props.email}
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
            onChangeText={this.onPasswordChange.bind(this)}
            secureTextEntry
            label="Password"
            placeholder="password"
            value={this.props.password}
          />
        </CardSection>

        {this.renderButton()}
        <CardSection />
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.authReducer.email,
    password: state.authReducer.password
  };
};

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser }
)(LoginForm);
