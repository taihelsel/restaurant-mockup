import React, { Component } from 'react';
import '../App.css';

/*React Components*/
import MenuItemPreview from './MenuItemPreview';
import menuData from ".././menuData.js";
class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      imageIndexes:[7,2,6,9,7,8],//Keeps record of the currently used images
      img0:{
        src : "images/appsides/7.jpeg",
        desc : null,
        title : "Fried Egg",
      },
      img1:{
        src : "images/appsides/2.jpeg",
        desc :  "Fried Tofu with sweet chili sauce, crush peanuts",
        title : "Tao Hu Tod",
      },
      img2:{
        src : "images/appsides/6.jpeg",
        desc : null,
        title : "Brown Rice",
      },
      img3:{
        src : "images/entree/9.jpeg",
        desc :  "Stir fried green beans with red curry paste, lime leaves, bell peppers",
        title : "Pad Prik Khing",
      },
      img4:{
        src :  "images/appsides/7.jpeg",
        desc : null,
        title :  "Fried Egg",
      },
      img5:{
        src : "images/entree/8.jpeg",
        desc: "Stir crispy choice of meat, cashew nuts, bell peppers, onions, chili sauce",
        title: "Pad Med Mamuang",
      },
    }
  }
  componentDidMount = () =>{
    const intervalTimer = 2500;
    const mealTypes = ["appsides","entree","soupsalad"];//Holds currently supported meal types
    let i = 0;
    this.interval = setInterval(()=>{
      const mealIndex = Math.floor(Math.random() * (mealTypes.length-1)) + 0;
      const mealItemIndexes = this.randomImg(1,menuData[mealTypes[mealIndex]].length - 2); 
      const menuItem1 = menuData[mealTypes[mealIndex]][mealItemIndexes[0]];
      const menuItem2 = menuData[mealTypes[mealIndex]][mealItemIndexes[1]];
      let newImages = this.state.imageIndexes;
      if(document.getElementsByClassName("MenuItemPreview")[i].getAttribute("id") !=="hovered-home-preview"){
        newImages[i]=mealItemIndexes[0];
        this.setState({
          imageIndexes:newImages,
          ["img"+i] : {
            src : "images/"+mealTypes[mealIndex]+"/"+mealItemIndexes[0]+".jpeg",
            desc: menuItem1.desc,
            title:menuItem1.name,
          },
        });
      }
      if(document.getElementsByClassName("MenuItemPreview")[5-i].getAttribute("id") !=="hovered-home-preview"){
        newImages[5-i]=mealItemIndexes[1];
        this.setState({
          imageIndexes:newImages,
          ["img"+(5-i)] : {
            src : "images/"+mealTypes[mealIndex]+"/"+mealItemIndexes[1]+".jpeg",
            desc:menuItem2.desc,
            title:menuItem2.name,
          },
        });
      }
      if(i >= 5){
        i=0;
      }else{
        i++;
      }
    },intervalTimer);
  }
  randomImg = (min,max,y=null,x=null) =>{
    if(y === x|| y===null || x===null || this.state.imageIndexes.indexOf(y) !== -1 || this.state.imageIndexes.indexOf(x) !== -1){
      return this.randomImg(min,max, Math.floor(Math.random() * max) + min, Math.floor(Math.random() * max) + min);
    }else{
      return [y,x];
    }
  }
  setHover = (e) =>{
    /*Set Identifier*/
    e.currentTarget.setAttribute("id","hovered-home-preview");
    console.log(e.currentTarget);
  }
  removeHover = (e) =>{
    e.currentTarget.removeAttribute("id");
    console.log(e.currentTarget);
  }
  render() {
    return (
      <div id="Home">
        <h1 className="home-text">Authentic Thai Cuisine</h1>
        <ul className="home-menu-preview">
          <MenuItemPreview onMouseOut={this.removeHover} onMouseOver={this.setHover} itemData={this.state.img0}/>
          <MenuItemPreview onMouseOut={this.removeHover} onMouseOver={this.setHover} itemData={this.state.img1} />
          <MenuItemPreview onMouseOut={this.removeHover} onMouseOver={this.setHover} itemData={this.state.img2} />
          <MenuItemPreview onMouseOut={this.removeHover} onMouseOver={this.setHover} itemData={this.state.img3}/>
          <MenuItemPreview onMouseOut={this.removeHover} onMouseOver={this.setHover} itemData={this.state.img4}/>
          <MenuItemPreview onMouseOut={this.removeHover} onMouseOver={this.setHover} itemData={this.state.img5}/>
        </ul>
      </div>
    );
  }
}

export default Home;
