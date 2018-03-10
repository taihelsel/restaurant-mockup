import React, { Component } from 'react';
import '../App.css';
class MenuItemPreview extends Component {
    constructor(props){
        super(props);
        this.state = {
            src : this.props.src,
            desc : this.props.desc,
            title : this.props.title,
        }
    }
  render() {
    return (
      <li className="MenuItemPreview">
        <img src={this.state.src} alt="Menu Item Picture" />
      </li>
    );
  }
}

export default MenuItemPreview;
