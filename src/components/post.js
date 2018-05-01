import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions/index';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // title: '',
      // tags: '',
      // coverImage: '',
      // content: '',
    };

    this.delete = this.delete.bind(this);
  }

  // getting the id was done usint this StackOverflow post: https://stackoverflow.com/questions/45069824/how-to-pass-data-through-my-react-router-with-reactjs
  componentWillMount() {
    this.props.fetchPost(this.props.match.params.postID);
  }

  delete(event) {
    event.preventDefault();
    this.props.deletePost(this.props.match.params.postID, this.props.history);
  }

  render() {
    return (
      <div id="post-view">
        <div className="singular-post">
          <img src={this.props.selectedPost.cover_url} alt={this.props.selectedPost.title} />
          <h1>{this.props.selectedPost.title}</h1>
          <h2>{this.props.selectedPost.tags}</h2>
          <p>{this.props.selectedPost.content}</p>
        </div>
        <div id="controls">
          <span
            alt="delete"
            role="button"
            tabIndex={-1}
            onClick={this.delete}
            className="lnr lnr-trash"
          />
          <span alt="edit" className="lnr lnr-pencil" />
        </div>
      </div>
    );
  }
}

// connects particular parts of redux state to this components props
const mapStateToProps = state => ({
  selectedPost: state.posts.post,
});

export default withRouter(connect(mapStateToProps, { fetchPost, deletePost })(Post));
