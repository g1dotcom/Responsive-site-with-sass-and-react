import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["...", "IIIII", "IIIIIIIIIIIII"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="dıv1">
          <img src="assets/linkedi.png" className="me" />
          <h1>
            <h1> Hello,my name is Gökhan.</h1> <br /> I am a software developer.
            <br /> I like coding.I'm looking for a job. <br /> This is the best
            place to get information about me.
            <br /> I shared some of my projects with you. <br /> You can scroll
            down to see this
          </h1>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Front End. Dev.</h2>
          <h1>Gökhan SÜLE</h1>
          <h3>
            Freelance <span ref={textRef}> Yazılım </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img className="asset" src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
