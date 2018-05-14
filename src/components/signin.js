import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import { signinUser } from '../actions/index';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  onEmailChange(event) {
    event.preventDefault();
    this.setState({ email: event.target.value });
  }

  onPasswordChange(event) {
    event.preventDefault();
    this.setState({ password: event.target.value });
  }

  loginUser(event) {
    event.preventDefault();
    this.props.signinUser({
      email: this.state.email,
      password: this.state.password,
    }, this.props.history);
  }

  render() {
    return (
      <div id="input_form">
        <div className="form-text">
          <h1>Welcome Back!</h1>
          <div className="form-subtitle">
            <h3>Log in using your email and password</h3>
          </div>
        </div>
        <form>
          <FormGroup>
            <FormControl
              className="form"
              type="text"
              value={this.state.email}
              placeholder="Email"
              onChange={this.onEmailChange}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              className="form"
              type="text"
              value={this.state.password}
              placeholder="Password"
              onChange={this.onPasswordChange}
            />
          </FormGroup>
        </form>
        <Button className="button" onClick={this.loginUser}>
          Sign In
        </Button>
      </div>
    );
  }
}

export default withRouter(connect(null, { signinUser })(SignIn));
