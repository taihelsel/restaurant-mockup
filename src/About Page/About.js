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
          <img className="owner-image" />
          
        </div>
      </div>
    );
  }
}

export default About;
