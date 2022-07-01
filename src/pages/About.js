import React, { useState } from 'react'
import graduation from "./pictures/graduation.png"
import medal from "./pictures/medal.png"
import tennis from "./pictures/tennis.png"

const About = () => {
  function toggleAbout(){
    setVisibility("")
    setVisibility1("hidden")
    setVisibility2("hidden")
  }
  function toggleAbout1(){
    setVisibility("hidden")
    setVisibility1("")
    setVisibility2("hidden")
  }
  function toggleAbout2(){
    setVisibility("hidden")
    setVisibility1("hidden")
    setVisibility2("")
  }
  const[visibility, setVisibility] = useState("")
  const[visibility1, setVisibility1] = useState("hidden")
  const[visibility2, setVisibility2] = useState("hidden")
  return (
    <div className="about" id='about'>
      <div className='titleAbout'>
        <p>About myself</p>
        <div class="line"></div>
      </div>
      <div className='about-page'>
        <div className='summary'>
          <div className="summary-box">
            <section onClick={toggleAbout}>
              <img src={graduation} alt="" /><p>SCHOOL</p></section>
            <section onClick={toggleAbout1}>
              <img src={tennis} alt="" /><p>HOBBY</p></section>
            <section onClick={toggleAbout2}>
              <img src={medal} alt="" /><p>EXTRA</p></section>
          </div>
        </div>
        <div className='paragraphs'>
        <div className={`school-box ${visibility}`}>
          <p>
            I'm currently attending my senior year at Galileo Ferraris High School in Turin, Italy,
            with the goal to come back in the United States for college. I also attended a whole year
            at Mcminnville High School in Oregon, where I had infinite accademic opportunities that I
            have been able to take advantage of.
            I got an American honorary diploma 
          </p>
        </div>
        <div className={`sport-box ${visibility1}`}>
          <p>hooobby</p>
        </div>
        <div className={`extra-box ${visibility2}`}>
          <p>extraaaa</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About
