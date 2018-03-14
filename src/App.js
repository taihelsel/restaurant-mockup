import React, { Component } from 'react';
import './App.css';

/*React Components*/
import Nav from "./Nav.js";
import Home from "./Home Page/Home.js";
import Menu from "./Menu Page/Menu.js";
import About from "./About Page/About.js";
import Contact from "./Contact Page/Contact.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
        <Menu />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
