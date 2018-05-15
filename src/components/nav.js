import React, { Component } from 'react';
import { connect } from 'react-redux';
// This SO post helped with my React.OneChild error https://stackoverflow.com/questions/44992324/react-children-only-expected-to-receive-a-single-react-element-child-in-react-ro
import { NavLink, withRouter } from 'react-router-dom';
import '../style.scss';
import { signoutUser } from '../actions/index';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <nav>
        <ul>
          <li id="new-post-link"><NavLink className="pink-button" id="new" to="/posts/new">New post</NavLink></li>
          <li><NavLink id="title" to="/" exact>Redux</NavLink></li>
          { localStorage.getItem('token') !== null &&
            <li id="auth-buttons">
              <li id="hello">Hello, {JSON.parse(localStorage.getItem('user')).username}</li>
              <li onClick={() => this.props.signoutUser(this.props.history)}><NavLink id="sign-out" className="pink-button" to="/" exact>Sign out</NavLink></li>
            </li>
          }
          { localStorage.getItem('token') === null &&
            <li id="auth-buttons">
              <li><NavLink id="sign-in" to="/signin">Sign in</NavLink></li>
              <li><NavLink className="pink-button" id="sign-up" to="/signup">Get started</NavLink></li>
            </li>
          }
        </ul>
      </nav>
    );
  }
}

export default withRouter(connect(null, { signoutUser })(Nav));
