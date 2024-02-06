import React from 'react'
import './Programs.css'
import { programsData } from '../../data/programsData'
import  RightArrow  from '../../assets/rightArrow.png';

function Programs() {
  return (
    <div className='programs'>
      <div className="programs-header">
        <div className='stroke-text'>explore our</div>
        <div>programs</div>
        <div className='stroke-text'>to shape you</div>
      </div>
      <div className="programs-cards">
        {programsData.map((prog,i) => (
          <div className="category" key={i}>
            {prog.image}
            <span>{prog.heading}</span>
            <span>{prog.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <span><img src={RightArrow} alt="" /></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Programs