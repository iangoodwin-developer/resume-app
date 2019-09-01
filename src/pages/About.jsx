import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron.jsx';

class About extends Component {
  render() {

    return (
      <div>

        <Jumbotron title="About Me" subtitle="This page is all about me and my work"/>
        <div className="container"> 
            <div className="profile float-left img-thumbnail mr-3"></div>
            <p>
              {
                this.props.resumeObj.basics.summary
              }
            </p>
          </div>
      </div>
    );
  }

}

export default About
