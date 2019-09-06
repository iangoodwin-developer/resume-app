import React from 'react';
import Jumbotron from '../components/Jumbotron.jsx';
import Jobs from '../components/Job';

function Experience(props) {
  const work = props.resumeObj.work
  
  return (
    <div>

      <Jumbotron title="Experience" subtitle="Employers I have had" />
      <div className="container">
        <div className="">
         {
            work.map((key, index) => {
              return (
                <Jobs
                  key={index}
                  jobIndex={index}
                  details={work[index]}
                />
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Experience;
