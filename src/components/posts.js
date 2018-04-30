import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPosts } from '../actions/index';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.renderPosts = this.renderPosts.bind(this);
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  // used this article to see how to iterate over an array in react https://thinkster.io/tutorials/iterating-and-rendering-loops-in-react
  // used this StackOverflow post to see why the 'map' property was undefined: https://stackoverflow.com/questions/44447825/react-js-cannot-read-property-map-of-undefined
  renderPosts() {
    return (
      this.props.allPosts.map((post) => {
        console.log(post);
        return (
          <div className="post">
            <img src={post.cover_url} alt={post.title} />
            <h1>{post.title}</h1>
            <h2>{post.tags}</h2>
            <p>{post.content}</p>
          </div>
        );
      })
    );
  }

  render() {
    return (
      <div id="posts">
        {this.renderPosts()}
      </div>
    );
  }
}

// connects particular parts of redux state to this components props
const mapStateToProps = state => ({
  allPosts: state.posts.all,
});

export default withRouter(connect(mapStateToProps, { fetchPosts })(Posts));
