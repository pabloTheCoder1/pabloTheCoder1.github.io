import React, { useState } from 'react'
import gradCap from "./pictures/gradCap.png"
import medal from "./pictures/medal.png"
import tennis from "./pictures/tennis.png"
import graduation from "./pictures/graduation.jpg"
import serve from "./pictures/serve.jpg"
import dronePic from "./pictures/dronePic.jpg"
import soundcloud from "./pictures/soundcloud.jpg"
import replycode from "./pictures/replycode.jpg"
import math from "./pictures/mathkangaroo.jpg"

const About = () => {
  function toggleAbout(){
    setVisibility("")
    setVisibility1("hidden")
    setVisibility2("hidden")
    setSelection("selected")
    setSelection1("")
    setSelection2("")
  }
  function toggleAbout1(){
    setVisibility("hidden")
    setVisibility1("")
    setVisibility2("hidden")
    setSelection("")
    setSelection1("selected")
    setSelection2("")
  }
  function toggleAbout2(){
    setVisibility("hidden")
    setVisibility1("hidden")
    setVisibility2("")
    setSelection("")
    setSelection1("")
    setSelection2("selected")
  }
  const[visibility, setVisibility] = useState("")
  const[visibility1, setVisibility1] = useState("hidden")
  const[visibility2, setVisibility2] = useState("hidden")

  const[selection, setSelection] = useState("selected")
  const[selection1, setSelection1] = useState("")
  const[selection2, setSelection2] = useState("")
  return (
    <div className="about" id='about'>
      <div className='titleAbout'>
        <p>About myself</p>
        <div class="line"></div>
      </div>
      <div className='about-page'>
        <div className='summary'>
          <div className="summary-box">
            <section onClick={toggleAbout} className={`selector ${selection}`}>
              <img src={gradCap} alt="" /><p>SCHOOL</p></section>
            <section onClick={toggleAbout1} className={`selector ${selection1}`}>
              <img src={tennis} alt="" /><p>HOBBY</p></section>
            <section onClick={toggleAbout2} className={`selector ${selection2}`}>
              <img src={medal} alt="" /><p>EXTRA</p></section>
          </div>
        </div>
        <div className='paragraphs'>
        <div className={`school-box ${visibility}`}>
          <div className='sectionAbout'>
              <p>I'm currently attending my senior year at Galileo Ferraris High School in Turin, Italy,
              with the goal to come back in the United States for college. I also attended a whole year
              at Mcminnville High School in Oregon, where I had infinite accademic opportunities that I
              have been able to take advantage of, I managed to be first of my class and at the same time 
              I helped the school community, that welcomed me so well, by joining the student body.
              I got an American honorary diploma and I can't wait to come back to the States in my future,
              where I want to study computer science.</p>
            <img src={graduation} alt="" className='gradPic'/>
          </div>
        </div>
        <div className={`sport-box ${visibility1}`}>
        <div className='sectionAbout'>
              <p>
                I really enjoy spending time out of school in different ways, sometimes Italian high school 
                can be overwhelming, so I'm glad I get sometimes off doing stuff I like.
                My primary passion is programming, but I played tennis throughout all high school, and it's 
                a sport  really love, for this reason I also got the chance to play varsity in the United States.
              </p>
            <img src={serve} alt="" className='servePic'/>
          </div>
          <div className='sectionAbout'>
            <img src={dronePic} alt="" className='dronePic' />
            <p>
              About a couple years ago I got into video-editing, interest that I sperimented by making videos 
              mainly for school presentations. I wanted then to purchase a drone with some of my savings, and now, I love to
              create suggestive and original footages wherever I travel. I choose that I wanted to share my work, so I opened 
              a youtube channel as well! <div><a href="https://www.youtube.com/channel/UCEjFAAzkFWBYC2h10S9NSRg">GO TO THE CHANNEL</a></div> 
            </p>
          </div>
          <div className='sectionAbout'>
              <p>
                I played different instruments when I was little, but I developed throughout my childhood the guitar,
                doing different courses, now I'm simply a self-taught player.
                I also sang in different choirs, even during high school, with the love for pop music I also made some covers,
                one of which you can find on sound cloud at this link. <div><a href="https://soundcloud.com/user-30761373/when-i-was-your-mancover-by">
                  GO TO THE SOUNDCLOUD</a></div>
              </p>
            <img src={soundcloud} alt="" className='soundcloudPic'/>
          </div>
        </div>
        <div className={`extra-box ${visibility2}`} id="awards">
          <div className='sectionAbout'>
            <p>
              I attend a scientific High School in Italy, and I like math, I took part to 
              a good number of math competitions and i choose to do the same in the US, where I got
              awarded with the 3rd place in Oregon and 29th in the nation for math Kangaroo 2022.
            </p>
            <img src={math} alt="" className='soundcloudPic'/>
          </div>
          <div className='sectionAbout'>
            <img src={replycode} alt="" className='dronePic' />
            <p>
              This year I also attended a famous coding competition, called Reply Code Challenge, me 
              and my co-worker Shouvik Antu, managed to quilify 366 over 15000 partecipants.
            </p>

          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About
