import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'


const Main = () => {
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p><span>Hello, Dev.</span></p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suugest beautiful places to see on an upcoming road trip </p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>I love Lexie She is awesome she cute af</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Lexie Wink Owns Me, she da love of my life she sooo fuckin sexyy</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Lexie is Almighty! She is the boss  </p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder='Enter a prompt here' />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini might not show accurate results
          </p>
        </div>
      </div>

      
    </div>
  )
}

export default Main