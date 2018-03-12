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
  previewMousedOver = (e) =>{
    e.currentTarget.getElementsByClassName("home-preview-title")[0].style.display="inline-block";
    e.currentTarget.getElementsByClassName("home-preview-desc")[0].style.display="inline-block";
    this.props.onMouseOver(e);
  }
  previewMousedOut = (e) =>{
    e.currentTarget.getElementsByClassName("home-preview-title")[0].removeAttribute("style");
    e.currentTarget.getElementsByClassName("home-preview-desc")[0].removeAttribute("style");
    this.props.onMouseOut(e);
  }
  render() {
    const src = this.props.itemData.src;
    const previewImgStyle = {
        backgroundImage:"url("+require(".././"+src)+")",
    }
    return (
      <li onMouseOut={this.previewMousedOut} onMouseOver={this.previewMousedOver} className="MenuItemPreview">
        <div style={ previewImgStyle } className="home-preview-image"></div>
        <div className="home-preview-title">{this.state.title}</div>
        <div className="home-preview-desc">{this.state.desc}</div>
      </li>
    );
  }
}

export default MenuItemPreview;
