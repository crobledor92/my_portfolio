import { useState } from "react";
import "./App.css";
import { SiGmail } from "react-icons/si";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { projects, FreakyWorld, TennisStats, ShortenUrl, EventHub, StockHub, OnlineRecorder } from "./components/projects";

function App() {
  const [message, setMessage] = useState<string | undefined>(
    localStorage.getItem("message") || undefined
  );

  const handleMessage = (message: string) => {
    localStorage.setItem("message", message);
    setMessage(message);
  };

  const removeMessage = () => {
    localStorage.removeItem("message");
    setMessage(undefined);
  };

  return (
    <>
      <div className="wrapper">
        <div className="main-container">
          <header className="header">
            <button
              className="button-logo"
              type="button"
              onClick={removeMessage}
            >
              <h1 className="logo">
                <span className="span-logo">{"< "}</span>
                {"Cristian Robledo"}
                <span className="span-logo">{" />"}</span>
              </h1>
            </button>
            <ul className="navbar">
              <li className="navbar-li">
                <a href="mailto:crobledoramos@gmail.com">
                  <SiGmail />
                </a>
              </li>
              <li className="linkedin-li">
                <a
                  href="https://www.linkedin.com/in/cristian-robledo-dev/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <BsLinkedin />
                  <div className="linkedin-background"></div>
                </a>
              </li>
              <li className="navbar-li">
                <a
                  href="https://github.com/crobledor92"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <BsGithub />
                </a>
              </li>
            </ul>
          </header>
          <main className="main">
            <section className="message-container">
              {!message && (
                <article className="message">
                  <h1 className="header1">Welcome</h1>
                  <p>
                  I'm Cristian Robledo Ramos, a Full stack developer. Specializing in crafting dynamic web applications using the MERN stack. My journey includes diverse projects, refining my problem-solving skills and keeping me at the forefront of technology trends. Eager to connect, collaborate, and turn ideas into reality through code. Explore my portfolio, and don't hesitate to contact me. Let's build something amazing together!
                  </p>
                </article>
              )}
              {message === "freakyworld" && (
                <FreakyWorld />
              )}
              {message === "tennistats" && (
                <TennisStats />
              )}
              {message === "shortenurl" && (
                <ShortenUrl />
              )}
              {message === "stockhubpro" && (
                <StockHub />
              )}
              {message === "eventhubconnect" && (
                <EventHub />
              )}
              {message === "onlinerecorder" && (
                <OnlineRecorder />
              )}
            </section>
            <section>
              <h1 className="legend-title">Projects</h1>
              <div className="projects-container">
                {projects.map(project => {
                  return (
                    <div className={`project ${message === project.id ? 'project-selected' : ''}`}>
                      <a
                        className="project-button"
                        onClick={() => handleMessage(project.id)}
                      >
                        {project.name}
                      </a>
                    </div>
                  )
                })}
              </div>
            </section>
          </main>
          {/* <footer className="footer">
            <p>©2023</p>
          </footer> */}
        </div>
      </div>
    </>
  );
}

export default App;
