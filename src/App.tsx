import { useState } from 'react'
import './App.css'
import { SiGmail } from 'react-icons/si'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import reactLogo from "./assets/react_logo.png"
import mongoDBLogo from "./assets/mongoDB_logo.png"
import expressjsLogo from "./assets/expressjs_logo.png"
import nodejsLogo from "./assets/nodejs_logo.png"
import socketioLogo from "./assets/socketio_logo.svg"
import brevoLogo from "./assets/brevo_logo.webp"
import muiLogo from "./assets/mui_logo.png"
import { Logo } from './components/icons'

function App() {
  const [message, setMessage] = useState("")

  return (
    <>
      <div className='wrapper'>
        <div className='main-container'>
          <header className='header'>
            <button className='button-logo' type='button' onClick={() => setMessage("")}>
              <h1 className='logo'><span className='span-logo'>{"< "}</span>{"Cristian Robledo"}<span className='span-logo'>{" />"}</span></h1>
            </button>
            <ul className='navbar'>
              <li className='navbar-li'>
                <a href="mailto:crobledoramos@gmail.com">
                    <SiGmail/>
                </a>
              </li>
              <li className='linkedin-li'>
                <a href="mailto:crobledoramos@gmail.com">
                  <BsLinkedin />
                  <div className='linkedin-background'></div>
                </a>
              </li>
              <li className='navbar-li'>
                <a href="mailto:crobledoramos@gmail.com">
                  <BsGithub/>
                </a>
              </li>

            </ul>
          </header>
          <main className='main'>
            <section className='message-container'>
              {message === "" &&
              <article className='message'>
                <h1>Welcome</h1>
                <p>My name is Cristian Robledo, I'm a full stack developer based in Barcelona, Spain. Mainly focused on MERN stack.</p>
                <p>Using techonlogy to offer solutions in order to make people's life better.</p>
              </article>
              }
              {message === "freakyworld" &&
              <article className='message'>
                <h1>FreakyWorld</h1>
                <p>Freakyworld is a <b>marketplace</b> prototype for those "Magic the gathering" cards lovers. You will be able to sell or put up on auction those cards you dont want anymore and buy or bid up for your desired cards.</p>
                <div className='tech'>
                  <img title="MongoDB logo" className="tech-logo" src={mongoDBLogo} alt="MongoDB logo"/>
                  <img title="Express.js logo" className="tech-logo" src={expressjsLogo} alt="Express.js logo"/>
                  <img title="React logo" className="tech-logo" src={reactLogo} alt="React logo"/>
                  <img title="Node.js logo" className="tech-logo" src={nodejsLogo} alt="Node.js logo"/>
                  <img id="socketio-logo" title="Socket.io logo" className="tech-logo" src={socketioLogo} alt="Socket.io logo"/>
                  <img title="Material UI logo" className="tech-logo" src={muiLogo} alt="Material UI logo"/>
                  <img title="Brevo logo" className="tech-logo" src={brevoLogo} alt="Brevo logo"/>
                  <Logo/>
                </div>
              </article>

              }
            </section>
            <section>
              <h2>Projects</h2>
              <div className='projects-container'>
                <div>
                  <button onClick={() => setMessage("freakyworld")}>
                    FreakyWorld
                  </button>
                </div>
                <div>GoatStats</div>
              </div>
            </section>
          </main>
          <footer className='footer'>
            <p>©2023</p>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App
