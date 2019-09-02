import React, { Component } from 'react';

class School extends Component {
  render() {
    const { details } = this.props;
    const schoolIndex = this.props.schoolIndex
    return (
      <div className="experience-item">
        <div>
          <h3>{details.institution}</h3>
          <h5>{details.area}</h5>
          <h6><em>{details.studyType}</em></h6>
        </div>
        <div className="experience-item__date">
          Completed in {details.endDate}
        </div>    
      </div>

    );
  }
}

export default School;
