import React, { Component } from 'react';
import '../App.css';
class MenuNav extends Component {
    render() {
        return (
        <ul id="MenuNav">
            <li onClick={this.props.changeNav} mealtype="appsides" id="selected-menu-nav" className="menu-nav-items">Appetizers/Sides</li>
            <li onClick={this.props.changeNav} mealtype="soupsalad" className="menu-nav-items">Soup/Salad</li>
            <li onClick={this.props.changeNav} mealtype="entree" className="menu-nav-items">Entrée</li>
            <li onClick={this.props.changeNav} mealtype="null" className="menu-nav-items">Noodles</li>
            <li onClick={this.props.changeNav} mealtype="null" className="menu-nav-items">Drinks/Deserts</li>
        </ul>
        );
    }
}

export default MenuNav;
