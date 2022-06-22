import React from 'react'
import profilePic from "./profilePic.jpg"

const Home = () => {
  return (
    <div className='home'>
      <div class="container">
        <div class="typed-out">Hello world! I'm Pablo</div>
        <p>I'm a 18 years old web developer, <br></br>
        and I help people creating their  <br></br>
        web applications.</p>
      </div>
      <div className="profileInfos">
        <img src={profilePic} alt="profilePic" />
        <p>"Work every day with the ambition of someone who can't fail"</p>
      </div>
    </div>
  )
}

export default Home
