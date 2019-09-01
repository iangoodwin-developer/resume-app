import React, { Component } from 'react';

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <i className="fas fa-asterisk fa-7x text-success float-right"></i>
          <h1 className="display-3">{this.props.title}</h1>
          <p className="lead">{this.props.subtitle}</p>


        </div>
      </div>
    );
  }
}

export default Jumbotron;
