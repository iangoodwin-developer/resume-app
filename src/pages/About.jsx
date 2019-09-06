import React from 'react';
import Jumbotron from '../components/Jumbotron.jsx';

function About(props) {
  const summary = props.resumeObj.basics.summary
  
  return (
    <div>
      <Jumbotron title="About Me" subtitle="This page is all about me and my work"/>
      <div className="container"> 
          <div className="profile float-left img-thumbnail mr-3"></div>
          <p>
            {summary}
          </p>
        </div>
    </div>
  );
}

export default About
