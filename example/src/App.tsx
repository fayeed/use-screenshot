import React, { useRef } from "react";
import { useScreenshot } from "use-screenshot-hook";
import GithubIcon from "./github";
import CloseIcon from "./close";

const App = () => {
  const ref = useRef(null);
  const { image, takeScreenshot, isLoading, clear } = useScreenshot();

  return (
    <div className={["container", "container-unlock"].join(" ")}>
      <div className="base">
        <div className="book1">
          <span className="ribbon1">　</span>
          <div className="book1-r"></div>
        </div>
        <div className="book2"></div>
        <div className="book3">
          <span className="ribbon3">　</span>
          <div className="book3-l"></div>
        </div>
        <div className="book4"></div>
        <div className="book5"></div>
        <div className="book6">
          <span className="ribbon6">　</span>
          <div className="book6-l"></div>
        </div>
        <div className="book7"></div>
        <div className="row">
          <h1>use-screenshot-hook</h1>
          <a href="https://github.com/fayeed/use-screenshot" target="_blank">
            <GithubIcon height={36} width={36} />
          </a>
        </div>
        <p>Takes screenshot for react components</p>
        <button className={["btn"].join(" ")} onClick={() => takeScreenshot()}>
          {"Screenshot"}
        </button>
      </div>

      {image && (
        <div className="imageContainer">
          <img width={800} src={image} />
          <CloseIcon onClick={clear} />
        </div>
      )}
    </div>
  );
};

export default App;
