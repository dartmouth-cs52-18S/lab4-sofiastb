import React, { Component } from 'react';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      tags: '',
      coverImage: '',
      content: '',
    };
  }

  render() {
    return (
      <div className="note">
        <img alt="post" src={this.state.coverImage} />
        <h1>{this.state.title}</h1>
        <h2>#{this.state.tags}</h2>
        <p>{this.state.content}</p>
      </div>
    );
  }
}

export default Post;
