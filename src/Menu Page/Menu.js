import React, { Component } from 'react';
import '../App.css';

/*React components*/
import MenuNav from  './MenuNav.js';
import MenuItems from './MenuItems.js';
class Menu extends Component {
  constructor(){
    super();
    this.state = {
      currentNav : "appsides",
      currentPage : 0
    }
  }
  changeNav = (e) =>{
    let newNav = e.currentTarget.getAttribute("mealtype");
    if(newNav !== "null"){
      document.getElementById("selected-menu-nav").removeAttribute("id");
      e.currentTarget.setAttribute("id","selected-menu-nav");
      this.setState({
        currentNav:newNav
      });
    }else{
      alert("this meal type is not supported yet... (todo)");
    }
  }
  render() {
    return (
      <div id="Menu">
        <MenuNav changeNav={this.changeNav} />
        <MenuItems currentNav={this.state.currentNav} currentPage={this.state.currentPage} />
      </div>
    );
  }
}

export default Menu;
