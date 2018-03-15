import React, { Component } from 'react';
import '../App.css';

/*React components*/

class Contact extends Component {
  render() {
    return (
      <div id="Contact">
        <ol className="contact-location">
            <li className="contact-label">Location</li>
            <li className="contact-item"><a href="https://www.google.com/maps/place/614+E+Main+St,+Auburn,+WA+98002/@47.3074977,-122.2236096,17z/data=!3m1!4b1!4m5!3m4!1s0x5490587b006d45a1:0xa84590649e340b4a!8m2!3d47.3074977!4d-122.2214209" target="_blank">614 E MAIN ST
AUBURN, WA 98002</a></li>
        </ol>
        <ol className="contact-info">
            <li className="contact-label">Contact</li>
            <li className="contact-item">(253) 455-7177</li>
            <li className="contact-item">poe@gorgaithai.com</li>
        </ol>
        <ol className="contact-hours">
            <li className="contact-label">Hours</li>
            <li className="contact-item">Sunday &nbsp; &nbsp; Closed</li>
            <li className="contact-item">Monday &nbsp; &nbsp; 11:00 am	–	8:00 pm</li>
            <li className="contact-item">Tuesday &nbsp; &nbsp; 11:00 am	–	8:00 pm</li>
            <li className="contact-item">Wednesday &nbsp; 11:00 am	–	8:00 pm</li>
            <li className="contact-item">Thursday &nbsp; &nbsp; &nbsp;11:00 am	–	8:00 pm</li>
            <li className="contact-item">Friday &nbsp; &nbsp; &nbsp;11:00 am	–	8:00 pm</li>
            <li className="contact-item">Saturday &nbsp; &nbsp; &nbsp;12:00 pm	–	8:00 pm</li>
        </ol>
      </div>
    );
  }
}

export default Contact;
