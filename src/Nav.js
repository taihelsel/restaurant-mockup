import React, { Component } from 'react';
import './App.css';
class Nav extends Component {
  changeNav = (e) =>{
    document.getElementsByClassName("selected-nav-item")[0].classList.remove("selected-nav-item");
    e.currentTarget.classList.add("selected-nav-item");
  }
  render() {
    return (
      <ul id="Nav">
        <li className="nav-logo"><img src={require("./images/logo.png")} alt="Gorgai Thai Logo"/></li>
        <li onClick={this.changeNav} id="nav-home" className="nav-item selected-nav-item"><a href="#Home">Home</a></li>
        <li onClick={this.changeNav} id="nav-menu" className="nav-item"><a href="#Menu">Menu</a></li>
        <li onClick={this.changeNav} id="nav-about" className="nav-item"><a href="#About">About</a></li>
      </ul>
    );
  }
}

export default Nav;
