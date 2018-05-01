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
    this.navigateToPost = this.navigateToPost.bind(this);
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  navigateToPost(id) {
    this.props.history.push(`/posts/${id}`);
  }

  // used this article to see how to iterate over an array in react https://thinkster.io/tutorials/iterating-and-rendering-loops-in-react
  // used this StackOverflow post to see why the 'map' property was undefined: https://stackoverflow.com/questions/44447825/react-js-cannot-read-property-map-of-undefined
  renderPosts() {
    return (
      this.props.allPosts.map((post) => {
        return (
          <div className="post" role="button" tabIndex={-1} onClick={() => { this.navigateToPost(post.id); }}>
            <img src={post.cover_url} alt={post.title} />
            <h1>{post.title}</h1>
            <h2>{post.tags}</h2>
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
