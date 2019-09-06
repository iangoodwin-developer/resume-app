import React from 'react';
import SkillModal from '../components/SkillModal.jsx';

function Skill(props) {
  const {keyword, level} = props.details
  const skillIndex = props.skillIndex
  
  return (
    <li className="skill" 
    		data-toggle="modal" 
    		data-target={`#modal-${skillIndex}`}>
      {keyword}
      <SkillModal type={keyword} 
      			progress={level} 
      			modalIndex={skillIndex}/>
    </li>
  );
}

export default Skill;
