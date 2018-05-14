import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './nav';
import '../style.scss';
import Post from './post';
import NewPost from './new_post';
import Posts from './posts';
import SignUp from './signup';
import SignIn from './signin';
import requireAuth from './requireAuth';

const App = (props) => {
  return (
    <Router>
      <div id="content">
        <Nav />
        <div id="container">
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/posts/new" component={requireAuth(NewPost)} />
            <Route path="/posts/:postID" component={Post} />
            <Route render={() => (
              <div id="error">
                <h1>404 ERROR: Link not found</h1>
                <img alt="404 ERROR" src="http://gifimage.net/wp-content/uploads/2017/08/robot-gif-6.gif" />
              </div>
            )}
            />
          </Switch>
        </div>
        <footer />
      </div>
    </Router>
  );
};

export default App;
