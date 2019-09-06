import React from 'react';
import Jumbotron from '../components/Jumbotron.jsx';
import School from '../components/School';

function Education(props) {
  const education = props.resumeObj.education
  
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

export default Education;
