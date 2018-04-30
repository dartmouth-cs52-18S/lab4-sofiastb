import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

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
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  onTagsChange(event) {
    this.setState({ tags: event.target.value });
  }

  onContentChange(event) {
    this.setState({ content: event.target.value });
  }

  onImageURLChange(event) {
    this.setState({ coverImage: event.target.value });
  }

  render() {
    return (
      <div id="new_post">
        <form>
          <FormGroup>
            <FormControl
              type="text"
              value={this.state.title}
              placeholder="Post title"
              onChange={this.onTitleChange}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              type="text"
              value={this.state.tags}
              placeholder="Post tags"
              onChange={this.onTagsChange}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              type="text"
              value={this.state.coverImage}
              placeholder="Post content"
              onChange={this.onContentChange}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              type="text"
              value={this.state.content}
              placeholder="Cover image url"
              onChange={this.onImageURLChange}
            />
          </FormGroup>
        </form>
        <Button>Create Post</Button>
      </div>
    );
  }
}

export default NewPost;
