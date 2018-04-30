import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPosts } from '../actions/index';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.all || [],
    };

    this.renderPosts = this.renderPosts.bind(this);
  }

  componentWillMount() {
    this.setState({ posts: this.props.fetchPosts() });
  }

  // used this article to see how to iterate over an array in react https://thinkster.io/tutorials/iterating-and-rendering-loops-in-react
  // used this StackOverflow post to see why the 'map' property was undefined: https://stackoverflow.com/questions/44447825/react-js-cannot-read-property-map-of-undefined
  renderPosts() {
    console.log('test');
    const posts = this.state.posts.map((post) => {
      console.log(post);
      return (
        <div className="post">
          <h1>post.title</h1>
          <h2>post.tags</h2>
          <p>post.content</p>
        </div>
      );
    });

    return <div>{posts}</div>;
  }

  render() {
    return (
      <div id="posts">
        {this.renderPosts()}
      </div>
    );
  }
}

export default withRouter(connect(null, { fetchPosts })(Posts));
