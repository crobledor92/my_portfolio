import { BiLink } from "react-icons/bi";
import {
  SocketIOLogo,
  MongoDBLogo,
  ExpressLogo,
  ReactLogo,
  NodeJSLogo,
  MaterialUILogo,
  BrevoLogo,
} from "../icons";

const FreakyWorld = () => {
  return (
    <article className="message">
      <div className="message-header">
        <h1 className="header1">FreakyWorld</h1>
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
        Freakyworld is a <b>marketplace</b> prototype for those "Magic the
        gathering" cards lovers. You will be able to sell or put up on auction
        those cards you dont want anymore and buy or bid up for your desired
        cards.
      </p>
      <div className="tech">
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
