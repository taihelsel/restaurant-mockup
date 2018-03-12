import React, { Component } from 'react';
import '../App.css';
class MenuNav extends Component {
    setActiveNav = (e) =>{
        document.getElementById("selected-menu-nav").removeAttribute("id");
        e.currentTarget.setAttribute("id","selected-menu-nav");
    }
    render() {
        return (
        <ul id="MenuNav">
            <li onClick={this.setActiveNav} id="selected-menu-nav" className="menu-nav-items">Appetizers/Sides</li>
            <li onClick={this.setActiveNav} className="menu-nav-items">Soup/Salad</li>
            <li onClick={this.setActiveNav} className="menu-nav-items">Entrée</li>
            <li onClick={this.setActiveNav} className="menu-nav-items">Noodles</li>
            <li onClick={this.setActiveNav} className="menu-nav-items">Drinks/Deserts</li>
        </ul>
        );
    }
}

export default MenuNav;
