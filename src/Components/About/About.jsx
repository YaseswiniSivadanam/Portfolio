import React from 'react'
import './About.css' 
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/img.jpg'

const About = () => {
  return (
    <div id='about' className="about">
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
              <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
              <div className="about-para">
                <p>I am <span>Sivadanam Yaseswini</span>, pursuing B.Tech in Computer Science and Engineering. I have developed projects like Chat Bot Event Mapper, Fractional Knapsack Solver and Drowsiness Distraction.</p>
                <p>I am proficient in Java in terms of Coding Language and HTML, CSS, JS, React, MongoDB and many more technologies. I engage in competitive coding since 2 years. My GitHub showcases my passion for coding with projects in Java and web technologies.</p>
                <p>I am always eager to learn new technologies and improve my skills. I am also a quick learner and a team player. I am looking for opportunities to work with a team of developers and contribute to the success of the company.</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About