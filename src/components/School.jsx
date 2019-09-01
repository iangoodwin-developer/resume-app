import React, { Component } from 'react';

class Job extends Component {
  render() {
    const { details } = this.props;
    const schoolIndex = this.props.schoolIndex
    return (
      <div className="job">
        <div>
          <h3>{details.institution}</h3>
          <h5>{details.area}</h5>
          <h6><em>{details.studyType}</em></h6>
        </div>
        <div className="job__date">
          Completed in {details.endDate}
        </div>    
      </div>

    );
  }
}

export default Job;
