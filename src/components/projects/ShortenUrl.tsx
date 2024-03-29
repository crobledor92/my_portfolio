import { MongoDBLogo, NextAuthLogo, NextjsLogo, TailwindLogo, TremorLogo, TypescriptLogo } from '../icons'
import ProjectUrls from '../ProjectUrls'

const ShortenUrl = () => {
  return (
    <article className="message">
    <div className="message-header">
      <h1 className="header1">Shorten URL</h1>
      <ProjectUrls url="https://shortenurl-crobledor.netlify.app/" github="https://github.com/crobledor92/Shorten-URL" />
    </div>
    <p>
    Is your go-to URL shortener for swift and efficient link management. Easily shorten any number of URLs while gaining insightful visit data for each shortened link. Streamline your link-sharing experience with this user-friendly tool, offering comprehensive analytics to track and optimize your online presence. Shorten URL empowers you to manage and measure your link engagements effortlessly.
    </p>
    <div className="tech">
        <TypescriptLogo />
        <NextjsLogo />
        <MongoDBLogo />
        <TailwindLogo />
        <NextAuthLogo />
        <TremorLogo />
    </div>
  </article>
  )
}

export default ShortenUrl