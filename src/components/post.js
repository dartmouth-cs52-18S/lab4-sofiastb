import React, { Component } from 'react';
import { connect } from 'react-redux';
import onClickOutside from 'react-onclickoutside';
import Textarea from 'react-textarea-autosize';
import marked from 'marked';
import { withRouter } from 'react-router-dom';
import { FormGroup, FormControl } from 'react-bootstrap';
import { fetchPost, deletePost, updatePost } from '../actions/index';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isEditing booleans
      isEditingCoverPhoto: false,
      isEditingTitle: false,
      isEditingContent: false,
      isEditingTags: false,
      // local vars
      localCoverPhoto: '',
      localTitle: '',
      localContent: '',
      localTags: '',
      authed: localStorage.getItem('token'),
    };

    // cover photo
    this.editCoverPhoto = this.editCoverPhoto.bind(this);
    this.onCoverPhotoChange = this.onCoverPhotoChange.bind(this);

    // title
    this.editTitle = this.editTitle.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);

    // content
    this.editContent = this.editContent.bind(this);
    this.onContentChange = this.onContentChange.bind(this);

    // tags
    this.editTags = this.editTags.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);

    // other
    this.handleClickOutside = this.handleClickOutside.bind(this);

    this.delete = this.delete.bind(this);
  }

  // getting the id was done usint this StackOverflow post: https://stackoverflow.com/questions/45069824/how-to-pass-data-through-my-react-router-with-reactjs
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postID);
  }

  // onChange
  onCoverPhotoChange(event) {
    event.preventDefault();
    this.setState({ localCoverPhoto: event.target.value });
  }

  onTitleChange(event) {
    event.preventDefault();
    this.setState({ localTitle: event.target.value });
  }

  onContentChange(event) {
    event.preventDefault();
    this.setState({ localContent: event.target.value });
  }

  onTagsChange(event) {
    event.preventDefault();
    this.setState({ localTags: event.target.value });
  }

  // set editing status
  editCoverPhoto(event) {
    event.preventDefault();
    if (!this.state.isEditingCoverPhoto && this.state.authed) {
      this.setState({ isEditingCoverPhoto: true, localCoverPhoto: this.props.selectedPost.cover_url });
    }
  }

  editTitle(event) {
    event.preventDefault();
    if (!this.state.isEditingTitle && this.state.authed) {
      this.setState({ isEditingTitle: true, localTitle: this.props.selectedPost.title });
    }
  }

  editContent(event) {
    event.preventDefault();
    if (!this.state.isEditingContent && this.state.authed) {
      this.setState({ isEditingContent: true, localContent: this.props.selectedPost.content });
    }
  }

  editTags(event) {
    event.preventDefault();
    if (!this.state.isEditingTags && this.state.authed) {
      this.setState({ isEditingTags: true, localTags: this.props.selectedPost.tags });
    }
  }

  // other
  delete(event) {
    event.preventDefault();
    this.props.deletePost(this.props.match.params.postID, this.props.history);
  }

  handleClickOutside(event) {
    const post = {
      title: this.props.selectedPost.title,
      content: this.props.selectedPost.content,
      tags: this.props.selectedPost.tags,
      cover_url: this.props.selectedPost.cover_url,
    };

    if (this.state.localCoverPhoto !== '') {
      post.cover_url = this.state.localCoverPhoto;
    }

    if (this.state.localTitle !== '') {
      post.title = this.state.localTitle;
    }

    if (this.state.localContent !== '') {
      post.content = this.state.localContent;
    }

    if (this.state.localTags !== '') {
      post.tags = this.state.localTags;
    }

    this.props.updatePost(this.props.match.params.postID, {
      title: post.title, content: post.content, cover_url: post.cover_url, tags: post.tags,
    });

    if (this.state.isEditingCoverPhoto) {
      this.setState({ isEditingCoverPhoto: false });
    }

    if (this.state.isEditingTitle) {
      this.setState({ isEditingTitle: false });
    }

    if (this.state.isEditingTags) {
      this.setState({ isEditingTags: false });
    }

    if (this.state.isEditingContent) {
      this.setState({ isEditingContent: false });
    }
  }

  // render content
  renderCoverPhoto() {
    if (this.state.isEditingCoverPhoto) {
      return (
        <form>
          <FormGroup>
            <FormControl
              className="coverphoto-input"
              type="text"
              value={this.state.localCoverPhoto}
              onChange={this.onCoverPhotoChange}
            />
          </FormGroup>
        </form>
      );
    } else {
      return <img onClick={this.editCoverPhoto} src={this.props.selectedPost.cover_url} alt={this.props.selectedPost.cover_url} />;
    }
  }

  renderTitle() {
    if (this.state.isEditingTitle) {
      return (
        <form>
          <FormGroup>
            <FormControl
              className="title-input"
              type="text"
              value={this.state.localTitle}
              onChange={this.onTitleChange}
            />
          </FormGroup>
        </form>
      );
    } else {
      return <h1 onClick={this.editTitle}>{this.props.selectedPost.title}</h1>;
    }
  }

  renderContent() {
    if (this.state.isEditingContent) {
      return <Textarea className="content editing" onChange={this.onContentChange} value={this.state.localContent} />;
    } else {
      return (<div className="content"
        onClick={this.editContent}
        role="button"
        tabIndex={-1}
        dangerouslySetInnerHTML={{ __html: marked(this.props.selectedPost.content || '') }}
      />);
    }
  }

  renderTags() {
    if (this.state.isEditingTags) {
      return (
        <form>
          <FormGroup>
            <FormControl
              className="tags-input"
              type="text"
              value={this.state.localTags}
              onChange={this.onTagsChange}
            />
          </FormGroup>
        </form>
      );
    } else {
      return <p className="tags" onClick={this.editTags}>{this.props.selectedPost.tags}</p>;
    }
  }

  render() {
    return (
      <div id="post-view">
        <div className="singular-post">
          {this.renderCoverPhoto()}
          {this.renderTitle()}
          <h2>Author: {this.props.selectedPost.username}</h2>
          {this.renderContent()}
          {this.renderTags()}
        </div>
        {(localStorage.getItem('token') !== null && (this.state.isEditingTags || this.state.isEditingTitle || this.state.isEditingContent || this.state.isEditingCoverPhoto)) &&
          <div id="controls">
            <span
              alt="delete"
              role="button"
              tabIndex={-1}
              onClick={this.delete}
              className="lnr lnr-trash"
            />
          </div>
        }
      </div>
    );
  }
}

// connects particular parts of redux state to this components props
const mapStateToProps = state => ({
  selectedPost: state.posts.post,
});

export default withRouter(connect(mapStateToProps, { fetchPost, deletePost, updatePost })(onClickOutside(Post)));
