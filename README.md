# Lab 4: Redux Blog 💻
## Author 👩🏻‍💻
Sofia Stanescu-Bellu

## Description
This is the blogging application I built for lab 4. The blog can be found at [http://thereduxblog.surge.sh/](http://thereduxblog.surge.sh/). The blog allows users to upload a post, update the post and change its cover photo, title, content (which can be styled with Markdown!🎉), and tags, and delete the post if necessary. The app uses a simple API for getting and posting the data and is a mix of Redux and React.

### What didn't work
Redux was rough 😅. This was the hardest lab by far and I struggled to understand the core ideas behind Redux. Reducers, containers, actions... they all felt like a foreign language when I started and I read over a lot of posts online (sourced below) and looked over the short assignment again to better comprehend this new language.

The biggest struggle for me was the flow of data – I couldn't grasp how data flowed from one section of the app to another via Redux and I needed some help from Tim to get somewhat of a hang on it. I still think I have a ways to go before I'm fully comfortable with Redux and I'm not sure I'd choose Redux over React, but this lab was certainly helpful as a crash course into this new language and its capabilities.

### What worked
The API part of the lab went pretty smoothly. It did help that I've done work with APIs in the past and I understood the basic concepts well, but surprisingly, the API components were the less difficult aspects of the lab to implement (difficult because of Redux 😬).

React also went smoothly. Lab 3 gave me a good foundation for React and the React components in the lab were a nice break from the more complicated Redux.

### Extra credit
None this time, unfortunately 😞.

## Sources
* Tim helped me with the `mapStateToProps` for my `post.js` file and with my `posts-reducer.js`!
* [Basic API call in React with Redux and intro to Thunk middleware](https://medium.com/@colinlmcdonald/basic-api-call-in-react-with-redux-and-intro-to-thunk-middleware-bd5244cef180)
* [Iterating and rendering loops in React](https://thinkster.io/tutorials/iterating-and-rendering-loops-in-react)
* [Can I dispatch an action in a reducer?](https://stackoverflow.com/questions/36730793/can-i-dispatch-an-action-in-reducer)
* [Live updating with Redux](https://www.fullstackreact.com/30-days-of-react/day-20/)
* [Using object spread operator](https://redux.js.org/recipes/using-object-spread-operator)
* [What are store, dispatch, payloads, types, actions, connect, thunk, and reducers in Redux?](https://stackoverflow.com/questions/43246882/what-are-store-dispatch-payloads-types-actions-connect-thunk-reducers-in)
* [React.js cannot read property 'map' of undefined](https://stackoverflow.com/questions/44447825/react-js-cannot-read-property-map-of-undefined)
* [Redux API docs](https://github.com/reactjs/react-redux/blob/master/docs/api.md)
* [CSS3 gradient background set on body doesn't stretch but instead repeats](https://stackoverflow.com/questions/2869212/css3-gradient-background-set-on-body-doesnt-stretch-but-instead-repeats)
* [How to pass data through my React router with React.js](https://stackoverflow.com/questions/45069824/how-to-pass-data-through-my-react-router-with-reactjs)
* [React onClickOutside Package](https://github.com/Pomax/react-onclickoutside)
* [React Children Only Expected to Receive a Single React Element Child in React Router](https://stackoverflow.com/questions/44992324/react-children-only-expected-to-receive-a-single-react-element-child-in-react-ro)
