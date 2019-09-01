import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron.jsx';
import Skill from '../components/Skill.jsx';

class Skills extends Component {
  render() {
    const skills = this.props.resumeObj.skills;
    return (
      <div>
        <Jumbotron title="Skills" subtitle="Technologies I have experience with" />
        <div className="container">
          <div className="skills-list">
            {
              skills.map((key, index) => 
                <Skill key={index} details={skills[index]} skillIndex={index}/>
                )
            }
          </div>       
        </div>
      </div>
    );
  }
}

export default Skills
