import React from 'react'
import './Education.css'
import theme_pattern from '../../assets/theme_pattern.svg'
// import { ReactComponent as SchoolIcon } from "./school.svg"


import timelineElements from './timelineElements'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Education = () => {
  return (
    <div id="education" className="education">
        <div className="education-title">
            <h1>Education</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <VerticalTimeline>
          {
            timelineElements.map(element => {
              return (
                <VerticalTimelineElement
                  key={element.id}
                  date={element.date}
                  dateClassName="date"
                  iconStyle={{ background: '#b415FF', color: '#fff' }}
                  // icon={<SchoolIcon />}
                >
                  <p className='vertical-timeline-element-course'>{element.course}</p>
                  <p className='vertical-timeline-element-title'>{element.title}</p>
                  <p className='vertical-timeline-element-location'>{element.location}</p>
                  <p className="vertical-timeline-element-marks">{element.marks}</p>
                </VerticalTimelineElement>
              )
            })
          }
        </VerticalTimeline>

    </div>
  )
}

export default Education