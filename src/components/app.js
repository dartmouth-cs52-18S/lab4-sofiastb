import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import '../style.scss';
import Post from './post';
import NewPost from './new_post';
import Posts from './posts';

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink id="title" to="/" exact>Redux</NavLink></li>
        <li><NavLink id="new" to="/posts/new">New post</NavLink></li>
      </ul>
    </nav>
  );
};

const App = (props) => {
  return (
    <Router>
      <div id="content">
        <Nav />
        <div id="container">
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route path="/posts/new" component={NewPost} />
            <Route path="/posts/:postID" component={Post} />
            <Route render={() => (<div>post not found</div>)} />
          </Switch>
        </div>
        <footer />
      </div>
    </Router>
  );
};

export default App;
