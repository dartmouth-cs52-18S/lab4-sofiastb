import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import '../style.scss';
// import Counter from '../containers/counter';
// import Controls from '../containers/controls';

const Posts = (props) => {
  return (
    <div>
      This is where the posts go
    </div>
  );
};

const NewPost = (props) => {
  return (
    <div>
      <form>
        <FormGroup>
          <FormControl type="text" placeholder="Post title" />
        </FormGroup>
        <FormGroup>
          <FormControl type="text" placeholder="Post tags" />
        </FormGroup>
        <FormGroup>
          <FormControl type="text" placeholder="Post content" />
        </FormGroup>
        <FormGroup>
          <FormControl type="text" placeholder="Cover image url" />
        </FormGroup>
      </form>
      <Button>Create Post</Button>
    </div>
  );
};

const Post = (props) => {
  return <div>ID: {props.match.params.id} </div>;
};

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>My Redux Blog</NavLink></li>
        <li><NavLink to="/posts/new">New Post</NavLink></li>
      </ul>
    </nav>
  );
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/posts/new" component={NewPost} />
          <Route path="/posts/:postID" component={Post} />
          <Route render={() => (<div>post not found </div>)} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
