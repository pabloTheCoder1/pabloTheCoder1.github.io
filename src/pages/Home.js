import React from 'react'
import profilePic from "./pictures/profilePic.jpg"

const Home = () => {
  return (
    <div className='home'>
      <div className="presentation">
        <div className="typed-out">Hello world! I'm Pablo.</div>
        <p>I'm a 18 years old Italian web developer, <br/> 
        and I help people creating their web applications.</p>
      </div>
      <div className="profileInfos">
        <p>I started coding when I was 16, from programming with hardwares like Arduino 
          I learned the love I feel for this cryptic and mysterious languages we can use to communicate with 
          the only thing as smart powerful as human, computers .
          It's only after a little bit that I went on learning python and then javascript, developing 
          my skills in libriaries like React js and frameworks like Django
        </p>
        <img src={profilePic} alt="profilePic" />
      </div>
    </div>
  )
}

export default Home
