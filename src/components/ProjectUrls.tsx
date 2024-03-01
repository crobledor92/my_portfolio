import { BiLink } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const ProjectUrls = ({ url, github }: { url?: string; github: string }) => {
  return (
    <div className="project-links">
      {url &&
      (
        <a id="url" href={url} target="_blank" rel="noreferrer noopener">
          <BiLink />
        </a>
      )}
      <a id="github" href={github} target="_blank" rel="noreferrer noopener">
        <BsGithub />
      </a>
    </div>
  );
};

export default ProjectUrls;
