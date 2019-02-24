import React, { Component } from 'react';
import Navbar from './Components/Navbar.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import Post from './Components/Post.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>  
        <Switch>
        <Route exact path ='/' component = {Home} />
        <Route path ='/about' component = {About} />
        <Route path ='/contact' component = {Contact} />
        <Route path = '/:post_id' component= {Post} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
