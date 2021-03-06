import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import { createPost } from '../actions/index';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      tags: '',
      coverImage: '',
      content: '',
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onImageURLChange = this.onImageURLChange.bind(this);
    this.newPost = this.newPost.bind(this);
  }

  onTitleChange(event) {
    event.preventDefault();
    this.setState({ title: event.target.value });
  }

  onTagsChange(event) {
    event.preventDefault();
    this.setState({ tags: event.target.value });
  }

  onContentChange(event) {
    event.preventDefault();
    this.setState({ content: event.target.value });
  }

  onImageURLChange(event) {
    event.preventDefault();
    this.setState({ coverImage: event.target.value });
  }

  newPost(event) {
    event.preventDefault();
    this.props.createPost({
      title: this.state.title,
      content: this.state.content,
      coverImage: this.state.coverImage,
      tags: this.state.tags,
    }, this.props.history);
  }

  render() {
    return (
      <div id="input_form">
        <div className="form-text">
          <h1>Create a New Post:</h1>
          <div className="form-subtitle">
            <h3>Share your ideas with the world</h3>
            <span role="img" aria-label="ThoughtBubble">💭</span>
          </div>
        </div>
        <form>
          <FormGroup>
            <FormControl
              className="form"
              type="text"
              value={this.state.title}
              placeholder="Post title"
              onChange={this.onTitleChange}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              className="form"
              type="text"
              value={this.state.tags}
              placeholder="Post tags"
              onChange={this.onTagsChange}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              className="form"
              type="text"
              value={this.state.content}
              placeholder="Post content"
              onChange={this.onContentChange}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              className="form"
              type="text"
              value={this.state.coverImage}
              placeholder="Cover image url"
              onChange={this.onImageURLChange}
            />
          </FormGroup>
        </form>
        <Button className="button" onClick={this.newPost}>
          Create Post
        </Button>
      </div>
    );
  }
}

export default withRouter(connect(null, { createPost })(NewPost));
