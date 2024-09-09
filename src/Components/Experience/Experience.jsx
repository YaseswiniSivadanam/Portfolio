import React from 'react'
import './Experience.css'
import theme_pattern from '../../assets/theme_pattern.svg'

import timelineElementsWork from './timelineElementWork';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const Experience = () => {
  return (
    <div id="experience" className="experience">
        <div className="experience-title">
            <h1>Experience</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <VerticalTimeline>
          {
            timelineElementsWork.map(element => {
              return (
                <VerticalTimelineElement
                  key={element.id}
                  date={element.date}
                  dateClassName="date"
                  iconStyle={{ background: '#b415FF', color: '#fff' }}
                  // icon={<SchoolIcon />}
                >
                  <p className='vertical-timeline-element-role'>{element.role}</p>
                  <p className='vertical-timeline-element-company'>{element.company}</p>
                  <p className='vertical-timeline-element-location'>{element.location}</p>
                  <p className="vertical-timeline-element-description">{element.description}</p>
                </VerticalTimelineElement>
              )
            })
          }
        </VerticalTimeline>
    </div>
  )
}

export default Experience