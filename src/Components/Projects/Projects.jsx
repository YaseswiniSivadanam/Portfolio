import React, { useState } from 'react'
import './Projects.css'
import Menu from './Menu';
import theme_pattern from '../../assets/theme_pattern.svg'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Projects = () => {
  const [items, setItems] = useState(Menu);

  return (
    <section className="projects" id='projects'>
        <div className="projects-title">
            <h1>My Projects</h1> 
            <img src={theme_pattern} alt="" />
        </div>
        <div className="work_container grid">
            {items.map((elem) => {
                const {id, image, title, category, description, link} = elem;
                return (
                    <div className="work_card" key={id}>
                        <div className="work_thumbnail">
                            <img src={image} alt="" className='work_img'/>
                            <div className="work_mask"></div>
                        </div>
                        <span className="work_category">{category}</span>
                        <h3 className="work_title">{title}</h3>
                        <p className='work_description'>{description}</p>
                        <a href={link} className='work_button'>
                            <i className="fas fa-link work_button-icon"></i>
                        </a>

                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Projects