import React from 'react';
import './Skills.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const skillsData = {
  'Programming Languages': [
    { name: 'Java', level: 'Intermediate' },
    { name: 'C', level: 'Intermediate' },
    { name: 'Python', level: 'Basic' },
  ],
  'Web Development': [
    { name: 'HTML', level: 'Intermediate' },
    { name: 'CSS', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Basic' },
    { name: 'React', level: 'Basic' },
  ],
  'CS Fundamentals': [
    { name: 'OOPs', level: 'Intermediate' },
    { name: 'Data Structures', level: 'Intermediate' },
    { name: 'Algorithms', level: 'Intermediate' },
    { name: 'DBMS', level: 'Intermediate' },
    { name: 'Operating Systems', level: 'Basic' },
  ],
  'Tools & Technologies': [
    { name: 'Git', level: 'Intermediate' },
    { name: 'VS Code', level: 'Intermediate' },
    { name: 'Eclipse', level: 'Intermediate' },
    { name: 'Android Studio', level: 'Basic' },
    { name: 'Canva', level: 'Intermediate' },
  ],
};

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <div className="skills-title">
        <h1>Skills</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="skills-content">
        {Object.keys(skillsData).map((category) => (
          <div key={category} className="skills-category">
            <h2>{category}</h2>
            <div className="skills-items">
              {skillsData[category].map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
