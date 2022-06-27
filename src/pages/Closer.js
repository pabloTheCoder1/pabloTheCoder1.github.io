import React from 'react'
import instgram from "./pictures/instagram.png"
import mail from "./pictures/mail.png"
import facebook from "./pictures/facebook.png"

const Closer = () => {
  return (
    <div className='closer'>
      <div className='logos'>
        <img src={instgram} alt="" />
        <img src={mail} alt="" />
        <img src={facebook} alt="" />
      </div>
    </div>
  )
}

export default Closer
