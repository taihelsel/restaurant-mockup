import React, { Component } from 'react';
import '../App.css';

/*React Components*/
import MenuItemPreview from './MenuItemPreview';

class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      img0:{
        src : "menu0",
        des : "item description",
        title : "item title",
      },
      img1:{
        src : "menu1",
        des : "item description",
        title : "item title",
      },
      img2:{
        src : "menu2",
        des : "item description",
        title : "item title",
      },
      img3:{
        src : "menu3",
        des : "item description",
        title : "item title",
      },
      img4:{
        src : "menu4",
        des : "item description",
        title : "item title",
      },
      img5:{
        src : "menu5",
        des : "item description",
        title : "item title",
      },
    }
  }
  componentDidMount(){
    const base = this;
    const intervalTimer = 2500;
    let i = 0;
    this.interval = setInterval(function(){
      base.setState({
        ["img"+i] : {
          src : "newimgurl",
          desc:"item desc",
          title:"item titel",
        },
        ["img"+(6-i)] : {
          src : "newimgurl",
          desc:"item desc",
          title:"item titel",
        },
      });
      console.log(base.state["img"+i],base.state["img"+(5-i)]);
      if(i >= 5){
        i=0;
      }else{
        i++;
      }
    },intervalTimer);
  }
  render() {
    return (
      <div id="Home">
        <ul className="home-menu-preview">
          <MenuItemPreview itemData={this.state.img0}/>
          <MenuItemPreview itemData={this.state.img1} />
          <MenuItemPreview itemData={this.state.img2} />
          <MenuItemPreview itemData={this.state.img3}/>
          <MenuItemPreview itemData={this.state.img4}/>
          <MenuItemPreview itemData={this.state.img5}/>
        </ul>
      </div>
    );
  }
}

export default Home;
