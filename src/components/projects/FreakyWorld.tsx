import {
  SocketIOLogo,
  MongoDBLogo,
  ExpressLogo,
  ReactLogo,
  NodeJSLogo,
  MaterialUILogo,
  BrevoLogo,
  JavascriptLogo,
} from "../icons";
import ProjectUrls from "../ProjectUrls";

const FreakyWorld = () => {
  return (
    <article className="message">
      <div className="message-header">
        <h1 className="header1">FreakyWorld</h1>
        <ProjectUrls url="https://freakyworld.onrender.com" github="https://github.com/crobledor92/Freakyworld" />
      </div>
      <p>
        Freakyworld is a <b>marketplace</b> prototype for those "Magic the
        gathering" cards lovers. You will be able to sell or put up on auction
        those cards you dont want anymore and buy or bid up for your desired
        cards.
      </p>
      <div className="tech">
        <JavascriptLogo />
        <MongoDBLogo />
        <ExpressLogo />
        <ReactLogo />
        <NodeJSLogo />
        <MaterialUILogo />
        <BrevoLogo />
        <SocketIOLogo />
      </div>
    </article>
  );
};

export default FreakyWorld;
