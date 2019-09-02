import React, { Component } from 'react';

class Job extends Component {
  render() {
    const { details } = this.props;
    const jobIndex = this.props.jobIndex
    return (  
      <div className="experience-item">
        <div>
          <h3>{details.company}</h3>
          <h5>{details.position}</h5>
        </div>
        <div className="experience-item__date">
          {
            details.current ? 
            `Current Job as of ${details.startDate}` : 
            `${details.startDate} to ${details.endDate}`
          }
        </div>
        <br/>
        <p><em className="lead">{details.summary}</em></p>
        <div>
          <button type="button" 
                  className="btn btn-link"
                  data-toggle="collapse" 
                  data-target={"#collapseDetails-" + jobIndex}
                  role="button">
            Details
          </button>
          <div className="collapse" id={"collapseDetails-" + jobIndex}>
            <div>
              <ul className="list-style">
                {
                  details.highlights.map((key, index) => {
                    return <li key={index}>{details.highlights[index]}</li>
                  })
                }
              </ul>
            </div>  
          </div>
        </div>
      </div>

    );
  }
}

export default Job;
