import React, { Component } from 'react';
import '../App.css';

/*React Components*/
import MenuItemPreview from './MenuItemPreview';
import menuData from ".././menuData.js";
class Home extends Component {
  constructor(props){
    super(props);
    this.state={
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
  componentDidMount(){
    const base = this;
    const intervalTimer = 2500;
    const mealTypes = ["appsides","entree","soupsalad"];//Holds currently supported meal types
    let i = 0;
    this.interval = setInterval(function(){
      const mealIndex = base.random(0,mealTypes.length - 1); 
      const menuItem1Index = base.random(0,menuData[mealTypes[mealIndex]].length - 1); 
      const menuItem2Index = base.random(0,menuData[mealTypes[mealIndex]].length - 1); 
      const menuItem1 = menuData[mealTypes[mealIndex]][menuItem1Index];
      const menuItem2 = menuData[mealTypes[mealIndex]][menuItem1Index];
      base.setState({
        ["img"+i] : {
          src : "images/"+mealTypes[mealIndex]+"/"+menuItem1Index+".jpeg",
          desc: menuItem1.desc,
          title:menuItem1.name,
        },
        ["img"+(6-i)] : {
          src : "images/"+mealTypes[mealIndex]+"/"+menuItem2Index+".jpeg",
          desc:menuItem2.desc,
          title:menuItem2.name,
        },
      });
      //console.log(menuItem1);
      console.log(base.state["img"+i],base.state["img"+(5-i)]);
      if(i >= 5){
        i=0;
      }else{
        i++;
      }
    },intervalTimer);
  }
  random = (min,max) =>{
    return Math.floor(Math.random() * max) + min; 
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
