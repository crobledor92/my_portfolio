import { BiLink } from "react-icons/bi";
import { HibernateLogo, JUnitLogo, JakartaLogo, JavaLogo, MySQLLogo } from "../icons";

const StockHub = () => {
  return (
    <article className="message">
      <div className="message-header">
        <h1 className="header1">StockHub Pro</h1>
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
        Elevate your business operations with StockHub Pro, a robust desktop
        tool meticulously crafted in Java. Seamlessly manage stocks, clients,
        and more through an intuitive application tailored for company-wide use.
        StockHub Pro streamlines your business processes, empowering your team
        for enhanced productivity and precision in stock and client management.
      </p>
      <div className="tech">
        <JavaLogo/>
        <MySQLLogo />
        <HibernateLogo />
        <JakartaLogo />
        <JUnitLogo />
      </div>
    </article>
  );
};

export default StockHub;
