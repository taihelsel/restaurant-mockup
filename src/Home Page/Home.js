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
  componentDidMount = () =>{
    const intervalTimer = 2500;
    const mealTypes = ["appsides","entree","soupsalad"];//Holds currently supported meal types
    let i = 0;
    this.interval = setInterval(()=>{
      const mealIndex = this.random(0,mealTypes.length - 1)[0]; 
      const mealItemIndexes = this.random(1,menuData[mealTypes[mealIndex]].length - 2); 
      const menuItem1 = menuData[mealTypes[mealIndex]][mealItemIndexes[0]];
      const menuItem2 = menuData[mealTypes[mealIndex]][mealItemIndexes[1]];
      this.setState({
        ["img"+i] : {
          src : "images/"+mealTypes[mealIndex]+"/"+mealItemIndexes[0]+".jpeg",
          desc: menuItem1.desc,
          title:menuItem1.name,
        },
        ["img"+(5-i)] : {
          src : "images/"+mealTypes[mealIndex]+"/"+mealItemIndexes[1]+".jpeg",
          desc:menuItem2.desc,
          title:menuItem2.name,
        },
      });
      //console.log(menuItem1);
      console.log(this.state["img"+i],this.state["img"+(5-i)]);
      if(i >= 5){
        i=0;
      }else{
        i++;
      }
    },intervalTimer);
  }
  random = (min,max,y=null,x=null) =>{
    if(y === x|| y===null || x===null){
      return this.random(min,max, Math.floor(Math.random() * max) + min, Math.floor(Math.random() * max) + min);
    }else{
      return [y,x];
    }
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
