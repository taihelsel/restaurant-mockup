import React, { Component } from 'react';
import '../App.css';
class MenuItemPreview extends Component {
    constructor(props){
        super(props);
        this.state = {
            src : this.props.itemData.src,
            desc : this.props.itemData.desc,
            title : this.props.itemData.title,
        }
    }
  render() {
    const previewImgStyle = {
        backgroundImage:"url("+require(".././"+this.state.src)+")",
    }
    return (
      <li className="MenuItemPreview">
        <div style={ previewImgStyle } className="home-preview-image"></div>
        <div className="home-preview-title">{this.state.title}</div>
        <div className="home-preview-desc">{this.state.desc}</div>
      </li>
    );
  }
}

export default MenuItemPreview;