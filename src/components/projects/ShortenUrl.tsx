import { BiLink } from 'react-icons/bi'
import { MongoDBLogo, NextAuth, Nextjs, Typescript } from '../icons'

const ShortenUrl = () => {
  return (
    <article className="message">
    <div className="message-header">
      <h1 className="header1">Shorten URL</h1>
      <a
        className="anchorURL"
        href="https://freakyworld.onrender.com"
        target="_blank"
        rel="noreferrer noopener"
      >
        <BiLink color="white" />
      </a>
    </div>
    <p>
    Is your go-to URL shortener for swift and efficient link management. Easily shorten any number of URLs while gaining insightful visit data for each shortened link. Streamline your link-sharing experience with this user-friendly tool, offering comprehensive analytics to track and optimize your online presence. Shorten URL empowers you to manage and measure your link engagements effortlessly.
    </p>
    <div className="tech">
        <Nextjs />
        <MongoDBLogo />
        <NextAuth />
        <Typescript />
    </div>
  </article>
  )
}

export default ShortenUrl