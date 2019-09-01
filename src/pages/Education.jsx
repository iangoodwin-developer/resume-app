import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron.jsx';
import School from '../components/School';

class Education extends Component {
  render() {
    const education = this.props.resumeObj.education;
   
    return (
      <div>

        <Jumbotron title="Education" subtitle="Not only a student of life" />
        <div className="container">
          <div className="">
           {
              education.map((key, index) => {
                return (
                  <School
                    key={index}
                    schoolIndex={index}
                    details={education[index]}
                  />
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
