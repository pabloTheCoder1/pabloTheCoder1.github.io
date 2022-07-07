import React from 'react'
import profilePic from "./pictures/profilePic.jpg"
import instgram from "./pictures/instagram.png"
import mail from "./pictures/mail.png"
import facebook from "./pictures/facebook.png"

const Home = () => {
  return (
    <div className='home'>
      <div className='sezione'>
        <div className="presentation">
          <div className="typed-out">Hello world! I'm Pablo.</div>
          <p>I'm a 18 years old Italian web developer, <br/> 
          and I help people creating their web applications.</p>
        </div>
        <div className='social'>
          <div className='logos'>
            <a href="https://www.instagram.com/pablo_panariti/">
              <img src={instgram} alt="" className='logo1'/></a>
            <a href="mailto:pablo.panariti@gmail.com">
              <img src={mail} alt="" className='logo2'/></a>
            <a href="https://www.facebook.com/pablo.panariti.98">
              <img src={facebook} alt="" className='logo3'/></a>
          </div>
        </div>
      </div>
      <div className='infoCenter'>
      <div className="profileInfos">
        <p>I started coding when I was 16, from programming with hardwares like Arduino 
          I learned the love I feel for these cryptic and mysterious languages we can use to communicate with 
          the only things as smart and powerful as humans, computers. <br />
          It's only after a little bit that I went on learning python and then javascript, developing 
          my skills in libriaries like React js and frameworks like Django.
        </p>
        <img src={profilePic} alt="profilePic" />
      </div>
      </div>
    </div>
  )
}

export default Home
