import { BiLink } from "react-icons/bi";

const OnlineRecorder = () => {
  return (
    <article className="message">
      <div className="message-header">
        <h1 className="header1">Online Recorder</h1>
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
        A versatile web tool designed for capturing
        microphone, camera, and screen content, allowing users to record browser
        windows, applications, or the entire screen seamlessly. Upon completion,
        the platform provides a user-friendly interface for previewing recorded
        videos or listening to audio tracks. Users can conveniently download
        their recordings in their preferred file extension, enhancing the
        overall accessibility and usability of the online recording experience.
      </p>
      <div className="tech"></div>
    </article>
  );
};

export default OnlineRecorder;
