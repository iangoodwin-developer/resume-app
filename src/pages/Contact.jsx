import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron.jsx';

class Contact extends Component {
  render() {
    const { email, messenger, skype, linkedin } = this.props.resumeObj.basics
    return (
      <div>
        <Jumbotron title="Contact" subtitle="Please feel free to contact me for more info"/>
        <div className="container">
            <a title="Email message" href = {`mailto:${email}`}>
              <i className="fas fa-envelope-square fa-3x pr-3 pb-3"></i>
              Email
            </a>
            <br/>
            <a title="Facebook message" href = {`https://m.me/${messenger}`}>
              <i className="fab fa-facebook-messenger fa-3x pr-3 pb-3"></i>
              Facebook messenger
            </a>
            <br/>
            <a title="Skype message" href={`skype:${skype}?chat`}>
              <i className="fab fa-skype fa-3x pr-3 pb-3"></i>
              Skype message
            </a>
            <br/>
            <a title="LinkedIn" href={`https://www.linkedin.com/in/${linkedin}`}>
              <i className="fab fa-linkedin fa-3x pr-3 pb-3"></i>
              LinkedIn
            </a>
        </div>
      </div>
    );
  }
}

export default Contact
