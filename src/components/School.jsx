import React from 'react';

function School(props) {
  const { institution, area, studyType, endDate } = props.details;
  
  return (
    <div className="experience-item">
      <div>
        <h3>{institution}</h3>
        <h5>{area}</h5>
        <h6><em>{studyType}</em></h6>
      </div>
      <div className="experience-item__date">
        Completed in {endDate}
      </div>    
    </div>
  );
}

export default School;
