import React from 'react';

function Job(props) {
  const 
    {
      highlights, 
      summary, 
      startDate, 
      endDate, 
      company, 
      position, 
      current
    } = props.details;
  const jobIndex = props.jobIndex
  
  return (  
    <div className="experience-item">
      <div>
        <h3>{company}</h3>
        <h5>{position}</h5>
      </div>
      <div className="experience-item__date">
        {
          current ? 
          `Current Job as of ${startDate}` : 
          `${startDate} to ${endDate}`
        }
      </div>
      <br/>
      <p><em className="lead">{summary}</em></p>
      <div>
        <button type="button" 
                className="btn btn-link shadow-none"
                data-toggle="collapse" 
                data-target={"#collapseDetails-" + jobIndex}>
          Details
        </button>
        <div className="collapse" id={"collapseDetails-" + jobIndex}>
          <div>
            <ul className="list-style">
              {
                highlights.map((key, index) => {
                  return <li key={index}>{highlights[index]}</li>
                })
              }
            </ul>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Job;
