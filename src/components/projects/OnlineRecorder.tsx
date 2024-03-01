import ProjectUrls from "../ProjectUrls";
import { ReactLogo, TailwindLogo, TypescriptLogo } from "../icons";

const OnlineRecorder = () => {
  return (
    <article className="message">
      <div className="message-header">
        <h1 className="header1">Online Recorder</h1>
        <ProjectUrls url="https://online-recorder.netlify.app/" github="https://github.com/crobledor92/Online-Recorder" />
      </div>
      <p>
        A versatile web tool designed for capturing
        microphone, camera, and screen content, allowing users to record browser
        windows, applications, or the entire screen seamlessly. Upon completion,
        the platform provides a user-friendly interface for previewing recorded
        videos or listening to audio tracks. Users can conveniently download
        their recordings in their preferred file extension, enhancing the
        overall accessibility and usability of the online recording experience.
      </p>
      <div className="tech">
        <TypescriptLogo />
        <ReactLogo />
        <TailwindLogo />
      </div>
    </article>
  );
};

export default OnlineRecorder;
