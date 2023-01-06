import React from "react";
import IntroPage from "./components/IntroPage";
import QuestionList from "./components/QuestionList";

export default function App() {
  const [gameStart, setGameStart] = React.useState(false)

  function handleClick() {
    setGameStart(prevGameStart => !prevGameStart)
  }

  return (
    <div className="app">
      {gameStart ? <QuestionList setGameStart={setGameStart}/> : <IntroPage handleClick={handleClick}/>}
    </div>
  );
}
