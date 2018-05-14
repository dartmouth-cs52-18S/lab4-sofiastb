import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import { signupUser } from '../actions/index';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.newUser = this.newUser.bind(this);
  }

  onEmailChange(event) {
    event.preventDefault();
    this.setState({ email: event.target.value });
  }

  onPasswordChange(event) {
    event.preventDefault();
    this.setState({ password: event.target.value });
  }

  onUsernameChange(event) {
    event.preventDefault();
    this.setState({ username: event.target.value });
  }

  newUser(event) {
    event.preventDefault();
    this.props.signupUser({
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
    }, this.props.history);
  }

  render() {
    return (
      <div id="input_form">
        <div className="form-text">
          <h1>Welcome to Redux Blog!</h1>
          <div className="form-subtitle">
            <h3>Make an account, you know you want to</h3>
            <span role="img" aria-label="WinkyFace">😉</span>
          </div>
        </div>
        <form>
          <FormGroup>
            <FormControl
              className="form"
              type="text"
              value={this.state.email}
              placeholder="Enter an email address..."
              onChange={this.onEmailChange}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              className="form"
              type="text"
              value={this.state.username}
              placeholder="Create a username..."
              onChange={this.onUsernameChange}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              className="form"
              type="text"
              value={this.state.password}
              placeholder="Create a password..."
              onChange={this.onPasswordChange}
            />
          </FormGroup>
        </form>
        <Button className="button" onClick={this.newUser}>
          Sign Up
        </Button>
      </div>
    );
  }
}

export default withRouter(connect(null, { signupUser })(SignUp));
