import React from 'react'
import './Join.css'

function Join() {
  return (
    <div className='join' id='join'>
      <div className="left-j">
        <hr></hr>
        <div className='para'>
          <span>
            <span className='stroke-text'>ready to </span>
            <span>level up</span>
          </span>
          <span>
            <span>your body </span>
            <span className='stroke-text'>with us</span>
          </span>
        </div>
      </div>
      <div className="right-j">
        <form action="" className='email-cont'>
          <input type="text" placeholder='Enter your email address here' />
          <button>Join now</button>
        </form>
      </div>
    </div>
  )
}

export default Join