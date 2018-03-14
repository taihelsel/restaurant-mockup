import React, { Component } from 'react';
import '../App.css';

/*React components*/
import Slideshow from './Slideshow.js';

class About extends Component {
  render() {
    return (
      <div id="About">
        <Slideshow />
        <div className="owner-quote-wrapper">
          <p className="owner-quote">"We proudly serve traditional Thai street food. Fresh, authentic, and delicious cuisine with bold flavors. Gor Gai Thai."</p>
          <img className="owner-image" src="https://static1.squarespace.com/static/54d2af1ee4b0526a6669799d/t/579923b120099eba44e2921b/1469654082698/" alt="Owner of gorgaithai headshot" />
        </div>
      </div>
    );
  }
}

export default About;
