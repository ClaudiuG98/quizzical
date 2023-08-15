import React from "react";
import IntroPage from "./components/IntroPage";
import QuestionList from "./components/QuestionList";

export default function App() {
  const [gameStart, setGameStart] = React.useState(false);

  function handleClick() {
    setGameStart((prevGameStart) => !prevGameStart);
  }

  return (
    <div>
      <img src="./src/assets/shape-1.png" className="shape-top" />
      <div className="app">
        {gameStart ? (
          <QuestionList gameStart={gameStart} handleClick={handleClick} />
        ) : (
          <IntroPage handleClick={handleClick} />
        )}
      </div>
      <img src="./src/assets/shape-2.png" className="shape-bottom" />
    </div>
  );
}
