import React from 'react';

function Jumbotron(props) {
  
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <i className="fas fa-asterisk fa-7x text-success float-right"></i>
        <h1 className="display-3">{props.title}</h1>
        <p className="lead">{props.subtitle}</p>
      </div>
    </div>
  );
}

export default Jumbotron;
