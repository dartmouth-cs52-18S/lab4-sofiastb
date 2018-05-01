import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPost } from '../actions/index';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // title: '',
      // tags: '',
      // coverImage: '',
      // content: '',
    };
  }

  // getting the id was done usint this StackOverflow post: https://stackoverflow.com/questions/45069824/how-to-pass-data-through-my-react-router-with-reactjs
  componentWillMount() {
    this.props.fetchPost(this.props.match.params.postID);
  }

  render() {
    return (
      <div className="singular-post">
        <img src={this.props.selectedPost.cover_url} alt={this.props.selectedPost.title} />
        <h1>{this.props.selectedPost.title}</h1>
        <h2>{this.props.selectedPost.tags}</h2>
        <p>{this.props.selectedPost.content}</p>
      </div>
    );
  }
}

// connects particular parts of redux state to this components props
const mapStateToProps = state => ({
  selectedPost: state.posts.post,
});

export default withRouter(connect(mapStateToProps, { fetchPost })(Post));
