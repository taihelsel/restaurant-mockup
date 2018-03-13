import React, { Component } from 'react';
import '../App.css';
import menuData from ".././menuData.js";
class MenuItems extends Component {
    render() {
        return (
            <ul id="MenuItems">
                {
                    menuData[this.props.currentNav].map((menuItem,index)=>{
                        return (
                            <li key={index} className="menu-item">
                                <img className="menu-item-img" alt={menuItem.name + " img"}src={require(".././images/"+this.props.currentNav+"/"+(index+1)+".jpeg")}/>
                                <div className="menu-item-title">{menuItem.name}</div>
                                <div className="menu-item-desc">{menuItem.desc}</div>
                                <div className="menu-item-price">{"$"+menuItem.price}</div>
                            </li>
                        );
                    }) 
                }
            </ul>
        );
    }
}

export default MenuItems;
