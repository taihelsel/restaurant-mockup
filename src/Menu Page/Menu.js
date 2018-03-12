import React, { Component } from 'react';
import '../App.css';

/*React components*/
import MenuNav from  './MenuNav';
class Menu extends Component {
  render() {
    return (
      <div id="Menu">
        <MenuNav />
      </div>
    );
  }
}

export default Menu;
