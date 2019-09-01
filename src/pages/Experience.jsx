import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron.jsx';
import Jobs from '../components/Job';

class Experience extends Component {
  render() {
    const work = this.props.resumeObj.work;
   
    return (
      <div>

        <Jumbotron title="Experience" subtitle="Employment" />
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
}

export default Experience;
