import React, { Component } from 'react';
import './App.css';

/*React Components*/
import Home from "./Home.js";
import Menu from "./Menu.js";
import About from "./About.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Menu />
        <About />
      </div>
    );
  }
}

export default App;
