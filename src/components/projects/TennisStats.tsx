import {
  MongoDBLogo,
  ExpressLogo,
  NodeJSLogo,
  TypescriptLogo,
} from "../icons";
import ProjectUrls from "../ProjectUrls";

const TennisStats = () => {
  return (
    <article className="message">
      <div className="message-header">
        <h1 className="header1">Tennistats</h1>
        <ProjectUrls github="https://github.com/orgs/TennisStats-dev/repositories" />
      </div>
      <p>
      Backend project focused on tennis statistics and scores. Through periodic cron jobs, it seamlessly communicates with an external API, collecting and storing match data, including player information, results, and calculated stats. This centralized repository facilitates efficient data retrieval for any frontend, enabling diverse requests and streamlined access to comprehensive tennis-related information.
      </p>
      <div className="tech">
        <TypescriptLogo />
        <MongoDBLogo />
        <ExpressLogo />
        <NodeJSLogo />
      </div>
    </article>
  );
};

export default TennisStats;
