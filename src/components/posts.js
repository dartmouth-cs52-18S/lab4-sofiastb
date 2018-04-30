import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // posts: [],
    };
  }

  render() {
    return (
      <div id="posts">
        This is where the posts go.
      </div>
    );
  }
}

export default Posts;
