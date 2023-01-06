import React from "react";

export default function IntroPage(props) {
    return (
        <div>
            <img src="./src/assets/shape-1.png" className="shape-top"/>
            <div className="intro-page">
                <h1>Quizzical</h1>
                <p>Show us how smart you are</p>
                <button onClick={props.handleClick} className="start-quiz-button">Start Quiz</button>
            </div>
            <img src="./src/assets/shape-2.png" className="shape-bottom"/>
        </div>
    )
}