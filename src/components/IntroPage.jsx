import React from "react";

export default function IntroPage(props) {
  return (
    <div>
      <div className="intro-page">
        <h1>Quizzical</h1>
        <p>Show us how smart you are</p>
        <button onClick={props.handleClick} className="start-check-button">
          Start Quiz
        </button>
      </div>
    </div>
  );
}
