import React from 'react';
import Jumbotron from '../components/Jumbotron.jsx';

function Links(props) {
  const { linkedin, github, pdf } = props.resumeObj.basics

  return (
    <div>
      <Jumbotron title="Links" subtitle="Check out these links for more info"/>
      <div className="container">
          <a title="LinkedIn" href={`https://www.linkedin.com/in/${linkedin}`}>
            <i className="fab fa-linkedin fa-3x pr-3 pb-3"></i>
            LinkedIn
          </a>
          <br/>
          <a title="GitHub" href={`https://www.github.com/${github}`}>
            <i className="fab fa-github-square fa-3x pr-3 pb-3"></i>
            GitHub
          </a>
          <br/>
          <a title="Resume" download href={`${pdf}`}>
            <i className="fas fa-file-pdf fa-3x pr-3 pb-3"></i>
            Resumé
          </a>
      </div>
    </div>
  );
}

export default Links
