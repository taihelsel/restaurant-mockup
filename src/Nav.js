import React, { Component } from 'react';
import './App.css';
class Nav extends Component {
  render() {
    return (
      <ul id="Nav">
        <li className="nav-logo"><img src={require("./images/logo.png")} alt="Gorgai Thai Logo"/></li>
        <li id="nav-home" className="nav-item selected-nav-item"><a href="#Home">Home</a></li>
        <li id="nav-menu" className="nav-item"><a href="#Menu">Menu</a></li>
        <li id="nav-about" className="nav-item"><a href="#About">About</a></li>
      </ul>
    );
  }
}

export default Nav;
