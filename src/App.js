import React, { Component } from 'react';
import './App.css';

/*React Components*/
import Nav from "./Nav.js";
import Home from "./Home Page/Home.js";
import Menu from "./Menu Page/Menu.js";
import About from "./About Page/About.js";
import Contact from "./Contact Page/Contact.js";
class App extends Component {
  componentDidMount = () =>{
      //Setting each section to a variable
      const home = document.getElementById("Home");
      const menu = document.getElementById("Menu");
      const about = document.getElementById("About");
      const contact = document.getElementById("Contact")
      window.addEventListener("scroll",()=>{
          const offset = 500; //Will be the "breakpoint" for setting the active tab
          //Getting position of the bottom (y axis)
          const home_bottom = home.getBoundingClientRect().bottom;
          const menu_bottom = menu.getBoundingClientRect().bottom;
          const about_bottom = about.getBoundingClientRect().bottom;
          const contact_bottom = contact.getBoundingClientRect().bottom;
          console.log(about_bottom);;
          //checking bottom position
          if(home_bottom>offset){
              setActive(0);
          }else if(menu_bottom > offset){
              setActive(1);
          }else if(about_bottom > 600){ /* 600 is the custom breakpoint for the contact page*/
              setActive(2);
          }else{
              setActive(3);
          }
      })
      const setActive = (n) => {
          document.getElementsByClassName("selected-nav-item")[0].classList.remove("selected-nav-item");
          document.getElementsByClassName("nav-item")[n].classList.add("selected-nav-item");
      }
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
        <Menu />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
