import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import fetchPosts from '../actions/index';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // posts: [],
    };
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div id="posts">
        This is where the posts go.
      </div>
    );
  }
}

export default withRouter(connect(null, { fetchPosts })(Posts));
