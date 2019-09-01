import React, { Component } from 'react';
import SkillModal from '../components/SkillModal.jsx';

class Skill extends Component {
  render() {
    return (
      <li className="skill" 
      		data-toggle="modal" 
      		data-target={`#modal-${this.props.skillIndex}`}>
        {this.props.details.keyword}
        <SkillModal type={this.props.details.keyword} 
        			progress={this.props.details.level} 
        			modalIndex={this.props.skillIndex}/>
      </li>
    );
  }
}

export default Skill;
