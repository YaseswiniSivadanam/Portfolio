import React from 'react'
import './Hero.css'
import profile_img from '../../assets/img.jpg'
import { Bio } from '../../Data/PerInfo'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import circle from "./circle.json"
import Lottie from "react-lottie"

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <div className="hero-animation">
            <Lottie options={{animationData: circle, loop: true, autoplay: true}} height={400} width={400} />
            <img src={profile_img} alt="" className="profile-img" />
        </div>
        <h1><span>I'm Yaseswini Sivadanam,</span> Software Developer</h1>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <a href={Bio.resume} target="_blank" rel="noopener noreferrer" className="hero-resume">Resume Download</a>
        </div>
    </div>
  )
}

export default Hero
