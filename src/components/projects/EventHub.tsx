import { BiLink } from 'react-icons/bi'
import { LaravelLogo, MySQLLogo, PHPLogo } from '../icons'

const EventHub = () => {
  return (
    <article className="message">
    <div className="message-header">
      <h1 className="header1">EventHub Connect</h1>
      <a
        className="anchorURL"
        href="https://freakyworld.onrender.com"
        target="_blank"
        rel="noreferrer noopener"
      >
        <BiLink color="white" />
      </a>
    </div>
    <p className='message-title'>
    EventHub Connect is a dynamic website facilitating seamless interaction between companies and engaged listeners. Users can sign in, subscribe to upcoming events, and access event-related documents. Admins wield comprehensive control, managing events, information, and user interactions effortlessly. From adding and removing listeners to overseeing speakers, EventHub Connect ensures a smooth and organized experience for both event organizers and participants.
    </p>
    <div className="tech">
      <PHPLogo />
      <LaravelLogo />
      <MySQLLogo />
    </div>
  </article>
  )
}

export default EventHub