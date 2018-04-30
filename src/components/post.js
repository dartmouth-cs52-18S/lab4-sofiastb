import React, { Component } from 'react';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Test Post Title',
      tags: 'test',
      coverImage: 'https://www.fourseasons.com/alt/img-opt/~70.1002/publish/content/dam/fourseasons_magazine/SEW/seattle-skyline-1600x900.jpg',
      content: 'This is a test note content',
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
