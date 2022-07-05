import React from 'react'
import pablosnetwork from "./pictures/pablosnetwork.jpg"

const Work = () => {
  return (
    <div className='work' id='work'>
      <div className='titleAbout'>
        <p>My Work</p>
        <div class="line"></div>
      </div>
      <div className='workSection'>
        <div className='pablosnetwork'>
          <a href="https://pablosnetwork.netlify.app/"><img src={pablosnetwork} alt="" /></a> 
          <p>My first big project is the pablo's network, a live network where it's possible for 
            everyone to send texts and immages, the idea was to have a chat/community with all my friends 
            on the web, but still opened to whoever I wanted too, family and friends.
            It's fun to see what people have to share in a whole big chat, the pablo's network took me about 
            4 months to realize, and it's made using a library of Javascript called React js, which renders 
            JSX code, for the user interface.
            For the database and storage I used the powerful platform of Firebase.
          </p>
        </div>
        <div><a href="https://pablosnetwork.netlify.app/"><button>VISIT</button></a></div>
      </div>
      <div className='skills'>
        <h1>My Skills</h1>
        <li>
          <h3>Javascript</h3><span className='bar'><span className='javascript'></span></span>
        </li>
        <li>
          <h3>Python</h3><span className='bar'><span className='python'></span></span>
        </li>
        <li>
          <h3>React js</h3><span className='bar'><span className='react'></span></span>
        </li>
        <li>
          <h3>Git</h3><span className='bar'><span className='git'></span></span>
        </li>
        <li>
          <h3>Django</h3><span className='bar'><span className='django'></span></span>
        </li>
        <li>
          <h3>Web Development</h3><span className='bar'><span className='development'></span></span>
        </li>
      </div>
    </div>
  )
}

export default Work
